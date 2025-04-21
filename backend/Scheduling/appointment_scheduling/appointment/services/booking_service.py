from uuid import UUID
from .base import AppointmentService
from appointment.models.factory import AppointmentFactory
from appointment.models.appointment import Appointment
from appointment.models.timeslot import TimeSlot
from .conflict_strategy import ConflictCheckerStrategy
from django.db.models import Q
from django.core.exceptions import ValidationError

from appointment.events.producer import KafkaEventProducer
from appointment.events.event_types import EventTopics, serialize_appointment_event

class BookingService(AppointmentService):
    def __init__(self, conflict_checker: ConflictCheckerStrategy = ConflictCheckerStrategy(), event_producer=None):
        self.conflict_checker = conflict_checker
        self.event_producer = event_producer or KafkaEventProducer()

    def execute(self, patient_id: UUID, doctor_id: UUID, timeslot: TimeSlot) -> Appointment:
        new_appt = AppointmentFactory.create(patient_id, doctor_id, timeslot)
        existing = Appointment.objects.filter(
            doctor_id=doctor_id,
            timeslot__start_time__lt=timeslot.end_time,
            timeslot__end_time__gt=timeslot.start_time,
        )

        if self.conflict_checker.has_conflict(new_appt, existing):
            raise ValidationError("Doctor is not available at this time.")

        new_appt.save()

        # 🔥 Send Kafka event
        event_data = serialize_appointment_event(new_appt)
        self.event_producer.send_event(EventTopics.APPOINTMENT_BOOKED, event_data)

        return new_appt

from uuid import UUID
from appointment.models.appointment import Appointment
from .base import AppointmentService
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from appointment.events.producer import KafkaEventProducer
from appointment.events.event_types import EventTopics, serialize_appointment_event

class CancellationService(AppointmentService):
    def __init__(self, event_producer=None):
        self.event_producer = event_producer or KafkaEventProducer()

    def execute(self, appointment_id: UUID) -> Appointment:
        appt = Appointment.objects.get(id=appointment_id)
        appt.cancel()
        appt.save()

        event_data = serialize_appointment_event(appt)
        self.event_producer.send_event(EventTopics.APPOINTMENT_CANCELLED, event_data)

        return appt

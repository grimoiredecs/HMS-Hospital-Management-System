from .appointment import Appointment
from .timeslot import TimeSlot
from .status import AppointmentStatus

class AppointmentFactory:
    @staticmethod
    def create(patient_id, doctor_id, timeslot: TimeSlot) -> Appointment:
        return Appointment(
            patient_id=patient_id,
            doctor_id=doctor_id,
            timeslot=timeslot,
            status=AppointmentStatus.PENDING
        )

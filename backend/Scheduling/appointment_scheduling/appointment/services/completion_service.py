from uuid import UUID
from appointment.models.appointment import Appointment
from .base import AppointmentService
from django.core.exceptions import ObjectDoesNotExist, ValidationError

class CompletionService(AppointmentService):
    def execute(self, appointment_id: UUID) -> Appointment:
        try:
            appt = Appointment.objects.get(id=appointment_id)
            appt.complete()
            appt.save()
            return appt
        except ObjectDoesNotExist:
            raise ValidationError("Appointment not found.")
        except Exception as e:
            raise ValidationError(f"An error occurred while completing the appointment: {str(e)}")
# This service handles the completion of an appointment.
# It marks the appointment as completed and saves it to the database.
# If the appointment is not found or any other error occurs, it raises a ValidationError.
# This is useful for ensuring that the appointment's status is updated correctly in the system.

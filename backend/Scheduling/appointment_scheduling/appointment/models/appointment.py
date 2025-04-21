from django.db import models
import uuid
from .status import AppointmentStatus
from .timeslot import TimeSlot

class Appointment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient_id = models.UUIDField()
    doctor_id = models.UUIDField()
    timeslot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=AppointmentStatus.choices, default=AppointmentStatus.PENDING)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
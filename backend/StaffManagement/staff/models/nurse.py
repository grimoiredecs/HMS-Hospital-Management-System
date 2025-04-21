# staff/models/nurse.py
from django.db import models
from .staff import Staff
from .doctor import Doctor

class Nurse(Staff):
    assigned_doctors = models.ManyToManyField(Doctor, related_name="nurses")

    def __str__(self):
        return f"Nurse {self.first_name} {self.last_name}"

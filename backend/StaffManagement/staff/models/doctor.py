# staff/models/doctor.py
from django.db import models
from .staff import Staff

class Doctor(Staff):
    specialization = models.CharField(max_length=100)
    current_patients = models.JSONField(default=list)  

    def __str__(self):
        return f"Dr. {self.first_name} {self.last_name}"

from django.db import models
from .patient import Patient  # Make sure your Patient model exists

class MedicalHistory(models.Model):
    patient = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE,
        related_name='medical_history'
    )
    diagnosis = models.TextField()
    treatment = models.TextField()
    visit_date = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.patient} | {self.visit_date} | {self.diagnosis}"

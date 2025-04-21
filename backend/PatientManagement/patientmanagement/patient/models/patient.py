from django.db import models

class Patient(models.Model):

    class Department(models.TextChoices):
        CARDIOLOGY = "Cardiology"
        NEUROLOGY = "Neurology"
        ONCOLOGY = "Oncology"
        PEDIATRICS = "Pediatrics"
        GENERAL = "General Medicine"

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    department = models.CharField(
        max_length=30,
        choices=Department.choices,
        default=Department.GENERAL,
    )
    phone = models.CharField(max_length=30)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

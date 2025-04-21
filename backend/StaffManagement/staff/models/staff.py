# staff/models/staff.py
from django.db import models

#Liskov 
class Staff(models.Model):
    ROLE_CHOICES = [('Doctor', 'Doctor'), ('Nurse', 'Nurse')]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.TextField()
    department = models.CharField(max_length=100)
    employment_date = models.DateField()
    is_active = models.BooleanField(default=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    class Meta:
        abstract = True

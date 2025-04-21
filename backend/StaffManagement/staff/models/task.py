# staff/models/task.py

from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Task(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    ]

    staff_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    staff_id = models.PositiveIntegerField()
    staff = GenericForeignKey('staff_type', 'staff_id')  # Doctor or Nurse

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    assigned_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    def __str__(self):
        return f"{self.title} for {self.staff} ({self.status})"

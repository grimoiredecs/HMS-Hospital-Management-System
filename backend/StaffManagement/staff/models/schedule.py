# staff/models/schedule.py

from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Schedule(models.Model):
    SHIFT_CHOICES = [
        ('Morning', 'Morning'),
        ('Afternoon', 'Afternoon'),
        ('Night', 'Night'),
    ]

    # Polymorphic reference to either Doctor or Nurse
    staff_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    staff_id = models.PositiveIntegerField()
    staff = GenericForeignKey('staff_type', 'staff_id')

    # Core schedule fields
    date = models.DateField()
    shift = models.CharField(max_length=20, choices=SHIFT_CHOICES)
    room = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('staff_type', 'staff_id', 'date', 'shift')
        ordering = ['-date']

    def __str__(self):
        return f"{self.staff} — {self.date} ({self.shift})"

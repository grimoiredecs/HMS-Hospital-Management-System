from django.db import models
import uuid

class TimeSlot(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def duration_in_minutes(self):
        return int((self.end_time - self.start_time).total_seconds() / 60)

    def __str__(self):
        return f"{self.start_time} to {self.end_time}"

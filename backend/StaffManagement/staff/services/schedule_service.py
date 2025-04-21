# staff/services/schedule_service.py
from .base_service import BaseService
from staff.models.strategy.base_schedule_strategy import Schedule
from django.core.exceptions import ValidationError

class ScheduleService(BaseService):
    def validate(self, staff_id, date, shift):
        if Schedule.objects.filter(staff_id=staff_id, date=date, shift=shift).exists():
            raise ValidationError("Staff already has a shift at this time")

    def assign_shift(self, staff_id, date, shift, room=None):
        self.validate(staff_id, date, shift)
        schedule = Schedule.objects.create(
            staff_id=staff_id,
            date=date,
            shift=shift,
            room=room
        )
        self.log(f"Assigned {shift} shift to staff {staff_id} on {date}")
        return schedule

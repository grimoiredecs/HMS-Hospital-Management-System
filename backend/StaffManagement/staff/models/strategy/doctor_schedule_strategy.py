# staff/services/strategy/doctor_schedule_strategy.py

from .base_schedule_strategy import BaseScheduleStrategy
from staff.models.schedule import Schedule

class DoctorScheduleStrategy(BaseScheduleStrategy):
    def can_assign_shift(self, doctor, date, shift) -> bool:
        # Doctor can only have one shift per day
        existing = Schedule.objects.filter(staff_id=doctor.id, date=date)
        return not existing.exists()

    def validate_room(self, room: str) -> bool:
        # Doctors must be in designated wards only
        return room.startswith("Ward") or room.startswith("Room")

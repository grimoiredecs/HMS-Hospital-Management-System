# staff/services/strategy/base_schedule_strategy.py

from abc import ABC, abstractmethod
from datetime import date

class BaseScheduleStrategy(ABC):
    @abstractmethod
    def can_assign_shift(self, staff, date, shift) -> bool:
        pass

    @abstractmethod
    def validate_room(self, room: str) -> bool:
        pass

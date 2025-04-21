from abc import ABC, abstractmethod
from uuid import UUID

class AppointmentService(ABC):
    @abstractmethod
    def execute(self, *args, **kwargs):
        pass

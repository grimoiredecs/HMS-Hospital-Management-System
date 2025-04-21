from abc import ABC, abstractmethod

class AbstractEventBus(ABC):
    @abstractmethod
    def publish(self, event_type: str, data: dict):
        pass

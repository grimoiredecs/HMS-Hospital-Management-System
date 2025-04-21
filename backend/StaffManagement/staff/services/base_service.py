# staff/services/base_service.py
from abc import ABC, abstractmethod

class BaseService(ABC):
    def __init__(self):
        self.log_prefix = f"[{self.__class__.__name__}]"

    def log(self, message: str):
        print(f"{self.log_prefix} {message}")

    @abstractmethod
    def validate(self, *args, **kwargs):
        pass

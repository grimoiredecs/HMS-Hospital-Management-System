
from abc import ABC, abstractmethod

class BasePatientService(ABC):

    @abstractmethod
    def execute(self, *args, **kwargs):
        pass

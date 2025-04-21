from .base import BasePatientService

class PatientUpdateService(BasePatientService):
    def execute(self, instance, data):
        for attr, value in data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
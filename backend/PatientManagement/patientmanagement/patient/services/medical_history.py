
from patient.models.medical_history import MedicalHistory

class MedicalHistoryService:
    def create_history(self, data):
        return MedicalHistory.objects.create(**data)

    def update_history(self, instance, data):
        for attr, value in data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

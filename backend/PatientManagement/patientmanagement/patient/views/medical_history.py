from rest_framework import viewsets
from patient.models.medical_history import MedicalHistory
from patient.serializers.medical_history import MedicalHistorySerializer
from patient.services.medical_history import MedicalHistoryService

class MedicalHistoryViewSet(viewsets.ModelViewSet):
    queryset = MedicalHistory.objects.all()
    serializer_class = MedicalHistorySerializer

    def __init__(self, service=None, *args, **kwargs):
        super(MedicalHistoryViewSet, self).__init__(*args, **kwargs)
        self.service = service or MedicalHistoryService()

    def perform_create(self, serializer):
        self.service.create_history(serializer.validated_data)

    def perform_update(self, serializer):
        self.service.update_history(self.get_object(), serializer.validated_data)

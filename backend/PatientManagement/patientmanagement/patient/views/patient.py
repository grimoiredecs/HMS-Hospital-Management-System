from rest_framework import viewsets
from patient.models.patient import Patient
from patient.serializers.patient import PatientSerializer
from patient.services.factory import PatientServiceFactory

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    def perform_create(self, serializer):
        service = PatientServiceFactory.registration()
        service.execute(serializer.validated_data)

    def perform_update(self, serializer):
        service = PatientServiceFactory.updater()
        service.execute(self.get_object(), serializer.validated_data)

    def retrieve(self, request, *args, **kwargs):
        service = PatientServiceFactory.detail()
        patient = service.execute(kwargs['pk'])
        serializer = self.get_serializer(patient)
        return Response(serializer.data)

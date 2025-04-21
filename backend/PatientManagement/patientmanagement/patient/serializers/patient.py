# patient/serializers/patient.py
from rest_framework import serializers
from patient.models.patient import Patient
from patient.models.medical_history import MedicalHistory
from patient.serializers.medical_history import MedicalHistorySerializer

class PatientSerializer(serializers.ModelSerializer):
    medical_history = MedicalHistorySerializer(many=True, read_only=True)

    class Meta:
        model = Patient
        fields = '__all__'

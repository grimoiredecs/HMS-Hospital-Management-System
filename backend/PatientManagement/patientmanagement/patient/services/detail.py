from patient.models.patient import Patient
from patient.services.base import BasePatientService

class PatientDetailService(BasePatientService):
    def execute(self, patient_id: int) -> Patient:
        return Patient.objects.get(id=patient_id)

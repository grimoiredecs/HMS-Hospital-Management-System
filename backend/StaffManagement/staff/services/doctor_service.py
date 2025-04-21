# staff/services/doctor_service.py
from .base_service import BaseService
from staff.models.doctor import Doctor

class DoctorService(BaseService):
    def validate(self, doctor_data):
        self.log("Validating doctor data...")
        # e.g. validate email format, duplicate check

    def create_doctor(self, doctor_data):
        self.validate(doctor_data)
        doctor = Doctor.objects.create(**doctor_data)
        self.log(f"Doctor created: {doctor}")
        return doctor

    def assign_patient(self, doctor_id, patient_id):
        doctor = Doctor.objects.get(id=doctor_id)
        if patient_id not in doctor.current_patients:
            doctor.current_patients.append(patient_id)
            doctor.save()
            self.log(f"Assigned patient {patient_id} to doctor {doctor_id}")
        return doctor

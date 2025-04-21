# staff/services/nurse_service.py
from .base_service import BaseService
from staff.models.nurse import Nurse
from staff.models.doctor import Doctor

class NurseService(BaseService):
    def validate(self, nurse_data):
        self.log("Validating nurse data...")

    def create_nurse(self, nurse_data):
        self.validate(nurse_data)
        nurse = Nurse.objects.create(**nurse_data)
        self.log(f"Nurse created: {nurse}")
        return nurse

    def assign_to_doctors(self, nurse_id, doctor_ids):
        nurse = Nurse.objects.get(id=nurse_id)
        doctors = Doctor.objects.filter(id__in=doctor_ids)
        nurse.assigned_doctors.set(doctors)
        nurse.save()
        self.log(f"Nurse {nurse_id} assigned to doctors: {doctor_ids}")
        return nurse

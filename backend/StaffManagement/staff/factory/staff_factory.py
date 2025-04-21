# staff/factory/staff_factory.py
from staff.models.doctor import Doctor
from staff.models.nurse import Nurse

class StaffFactory:
    @staticmethod
    def create_staff(role: str, **kwargs):
        if role == 'Doctor':
            return Doctor.objects.create(**kwargs)
        elif role == 'Nurse':
            return Nurse.objects.create(**kwargs)
        else:
            raise ValueError("Invalid role specified")

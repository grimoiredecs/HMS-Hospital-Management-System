from appointment.models.appointment import Appointment

class ConflictCheckerStrategy:
    def has_conflict(self, new_appt: Appointment, existing_appts: list[Appointment]) -> bool:
        for appt in existing_appts:
            if new_appt.is_conflicting(appt):
                return True
        return False

from patient.events.types import PatientEvents
from patient.services.base import *
from patient.models.patient import *

class PatientRegistrationService(BasePatientService):
    def __init__(self, event_bus):
        self.event_bus = event_bus

    def execute(self, data):
        patient = Patient.objects.create(**data)
        self.event_bus.publish(PatientEvents.PATIENT_REGISTERED, {
            "id": patient.id,
            "name": str(patient),
            "email": patient.email,
        })
        return patient

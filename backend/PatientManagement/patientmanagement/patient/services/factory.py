from .registration import PatientRegistrationService
from .update import PatientUpdateService
from .detail import PatientDetailService
from patient.events.local_bus import LocalEventBus

class PatientServiceFactory:
    event_bus = LocalEventBus()

    @staticmethod
    def registration():
        return PatientRegistrationService(PatientServiceFactory.event_bus)

    @staticmethod
    def updater():
        return PatientUpdateService()

    @staticmethod
    def detail():
        return PatientDetailService()

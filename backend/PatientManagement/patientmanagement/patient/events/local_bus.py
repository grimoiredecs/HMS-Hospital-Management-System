from patient.events.event_bus import AbstractEventBus

class LocalEventBus(AbstractEventBus):
    def publish(self, event_type: str, data: dict):
        print(f"[EVENT] {event_type}: {data}")

from kafka import KafkaProducer
import json
from patient.events.event_bus import AbstractEventBus

class KafkaEventBus(AbstractEventBus):
    def __init__(self):
        self.producer = KafkaProducer(
            bootstrap_servers="kafka:9092",
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )

    def publish(self, event_type: str, data: dict):
        self.producer.send(event_type, value=data)

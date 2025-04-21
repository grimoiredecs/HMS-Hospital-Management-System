from kafka import KafkaProducer
import json
from appointment.events.event_types import EventTopics

class KafkaEventProducer:
    def __init__(self, brokers=['localhost:9092']):
        self.producer = KafkaProducer(
            bootstrap_servers=brokers,
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )

    def send_event(self, topic: str, message: dict):
        self.producer.send(topic, message)
        self.producer.flush()

from kafka import KafkaConsumer
import json

def start_consumer():
    consumer = KafkaConsumer(
        'doctor_unavailable',
        bootstrap_servers=['localhost:9092'],
        value_deserializer=lambda m: json.loads(m.decode('utf-8')),
        group_id='appointment_service'
    )

    for message in consumer:
        event = message.value
        print(f"[EVENT RECEIVED] doctor_unavailable: {event}")
        # TODO: cancel future appointments of this doctor

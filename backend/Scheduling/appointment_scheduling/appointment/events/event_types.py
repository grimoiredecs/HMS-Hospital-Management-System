class EventTopics:
    APPOINTMENT_BOOKED = 'appointment_booked'
    APPOINTMENT_CANCELLED = 'appointment_cancelled'
    APPOINTMENT_COMPLETED = 'appointment_completed'


def serialize_appointment_event(appt):
    return {
        "appointment_id": str(appt.id),
        "patient_id": str(appt.patient_id),
        "doctor_id": str(appt.doctor_id),
        "timeslot": {
            "start_time": appt.timeslot.start_time.isoformat(),
            "end_time": appt.timeslot.end_time.isoformat()
        },
        "status": appt.status,
        "created_at": appt.created_at.isoformat()
    }

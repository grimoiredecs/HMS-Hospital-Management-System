from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from appointment.services.booking_service import BookingService
from appointment.models.timeslot import TimeSlot
from appointment.serializers.appointment_serializer import AppointmentSerializer
from uuid import UUID
from django.shortcuts import get_object_or_404

class BookAppointmentView(APIView):
    def post(self, request):
        data = request.data
        patient_id = UUID(data.get("patient_id"))
        doctor_id = UUID(data.get("doctor_id"))
        timeslot_id = UUID(data.get("timeslot_id"))

        timeslot = get_object_or_404(TimeSlot, id=timeslot_id)

        service = BookingService()
        try:
            appt = service.execute(patient_id, doctor_id, timeslot)
            serializer = AppointmentSerializer(appt)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

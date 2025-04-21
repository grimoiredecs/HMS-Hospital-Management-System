from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from appointment.services.cancellation_service import CancellationService
from uuid import UUID
from appointment.serializers.appointment_serializer import AppointmentSerializer

class CancelAppointmentView(APIView):
    def post(self, request, appointment_id):
        service = CancellationService()
        try:
            appt = service.execute(UUID(appointment_id))
            serializer = AppointmentSerializer(appt)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

# billing/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import InvoiceSerializer, PaymentSerializer
from .services import InvoiceService, PaymentService
from serializers import InvoiceSerializer, PaymentSerializer

class InvoiceView(APIView):
    def post(self, request):
        serializer = InvoiceSerializer(data=request.data)
        if serializer.is_valid():
            invoice = InvoiceService().create_invoice(serializer.validated_data)
            return Response(InvoiceSerializer(invoice).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        invoices = InvoiceService().list_all_invoices()
        return Response(InvoiceSerializer(invoices, many=True).data)

class PaymentView(APIView):
    def post(self, request):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            payment = PaymentService().create_payment(serializer.validated_data)
            return Response(PaymentSerializer(payment).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, invoice_id):
        payments = PaymentService().list_payments_for_invoice(invoice_id)
        return Response(PaymentSerializer(payments, many=True).data)


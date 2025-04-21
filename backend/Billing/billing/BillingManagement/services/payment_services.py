# billing/services/payment_service.py
from BillingManagement.models import Payment

class PaymentService:
    def create_payment(self, validated_data):
        payment = Payment(**validated_data)
        payment.apply_payment()
        return payment

    def list_payments_for_invoice(self, invoice_id):
        return Payment.objects.filter(invoice_id=invoice_id)



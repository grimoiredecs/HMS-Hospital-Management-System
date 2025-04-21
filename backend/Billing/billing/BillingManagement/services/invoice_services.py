from BillingManagement.models import Invoice

class InvoiceService:
    def create_invoice(self, validated_data):
        return Invoice.objects.create(**validated_data)

    def get_invoice_by_id(self, invoice_id):
        return Invoice.objects.get(id=invoice_id)

    def list_all_invoices(self):
        return Invoice.objects.all()
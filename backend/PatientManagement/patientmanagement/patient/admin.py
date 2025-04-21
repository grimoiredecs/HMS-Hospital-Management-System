# patient/admin.py
from django.contrib import admin
from patient.models.patient import Patient
from patient.models.medical_history import MedicalHistory

class MedicalHistoryInline(admin.TabularInline):
    model = MedicalHistory
    extra = 0

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'department', 'email')
    inlines = [MedicalHistoryInline]

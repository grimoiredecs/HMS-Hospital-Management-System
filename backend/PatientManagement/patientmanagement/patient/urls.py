from django.urls import path, include
from rest_framework.routers import DefaultRouter
from patient.views.patient import PatientViewSet  # assuming this exists
from patient.views.medical_history import MedicalHistoryViewSet

router = DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'medical-history', MedicalHistoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

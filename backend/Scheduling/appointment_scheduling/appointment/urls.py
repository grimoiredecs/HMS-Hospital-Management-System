from django.urls import path
from appointment.views.booking_view import BookAppointmentView
from appointment.views.cancellation_view import CancelAppointmentView
from appointment.views.completion_view import CompleteAppointmentView

urlpatterns = [
    path("book/", BookAppointmentView.as_view(), name="book-appointment"),
    path("cancel/<uuid:appointment_id>/", CancelAppointmentView.as_view(), name="cancel-appointment"),
    path("complete/<uuid:appointment_id>/", CompleteAppointmentView.as_view(), name="complete-appointment"),
]

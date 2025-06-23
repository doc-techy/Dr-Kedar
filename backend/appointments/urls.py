from django.urls import path
from .views import AppointmentCreateView, create_appointment

app_name = 'appointments'

urlpatterns = [
    # Class-based view
    path('api/appointments/', AppointmentCreateView.as_view(), name='appointment-create'),
    
    # Function-based view alternative
    path('api/appointments/create/', create_appointment, name='appointment-create-alt'),
] 
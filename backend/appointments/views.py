from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.utils.decorators import method_decorator
from django.views import View
import json
from datetime import datetime
from .models import Appointment

# Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
class AppointmentCreateView(View):
    def post(self, request):
        try:
            # Parse JSON data
            data = json.loads(request.body)
            
            # Validate required fields (removed 'reason' from required fields)
            required_fields = ['name', 'email', 'phone', 'date', 'time']
            for field in required_fields:
                if not data.get(field):
                    return JsonResponse({
                        'error': f'{field} is required'
                    }, status=400)
            
            # Validate date format
            try:
                appointment_date = datetime.strptime(data['date'], '%Y-%m-%d').date()
            except ValueError:
                return JsonResponse({
                    'error': 'Invalid date format. Use YYYY-MM-DD'
                }, status=400)
            
            # Create appointment
            appointment = Appointment.objects.create(
                name=data['name'],
                email=data['email'],
                phone=data['phone'],
                date=appointment_date,
                time=data['time'],
                message=data.get('message', '')
            )
            
            return JsonResponse({
                'success': True,
                'message': 'Appointment created successfully',
                'appointment_id': appointment.id,
                'data': {
                    'id': appointment.id,
                    'name': appointment.name,
                    'email': appointment.email,
                    'phone': appointment.phone,
                    'date': appointment.date.strftime('%Y-%m-%d'),
                    'time': appointment.time,
                    'message': appointment.message,
                    'status': appointment.status,
                    'created_at': appointment.created_at.isoformat()
                }
            }, status=201)
            
        except json.JSONDecodeError:
            return JsonResponse({
                'error': 'Invalid JSON data'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'error': f'Server error: {str(e)}'
            }, status=500)
    
    def get(self, request):
        """Get all appointments (optional for admin use)"""
        appointments = Appointment.objects.all()
        appointments_data = []
        
        for appointment in appointments:
            appointments_data.append({
                'id': appointment.id,
                'name': appointment.name,
                'email': appointment.email,
                'phone': appointment.phone,
                'date': appointment.date.strftime('%Y-%m-%d'),
                'time': appointment.time,
                'message': appointment.message,
                'status': appointment.status,
                'created_at': appointment.created_at.isoformat(),
                'updated_at': appointment.updated_at.isoformat()
            })
        
        return JsonResponse({
            'success': True,
            'appointments': appointments_data
        })

# Function-based view alternative (if needed)
@csrf_exempt
@require_http_methods(["POST"])
def create_appointment(request):
    """Alternative function-based view for creating appointments"""
    try:
        data = json.loads(request.body)
        
        # Create appointment
        appointment = Appointment.objects.create(
            name=data['name'],
            email=data['email'],
            phone=data['phone'],
            date=data['date'],
            time=data['time'],
            message=data.get('message', '')
        )
        
        return JsonResponse({
            'success': True,
            'appointment_id': appointment.id
        }, status=201)
        
    except Exception as e:
        return JsonResponse({
            'error': str(e)
        }, status=400)

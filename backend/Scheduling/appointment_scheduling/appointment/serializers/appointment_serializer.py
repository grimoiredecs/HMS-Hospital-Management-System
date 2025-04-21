from rest_framework import serializers
from appointment.models.appointment import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ('id', 'status', 'created_at', 'updated_at')
        extra_kwargs = {
            'patient_id': {'required': True},
            'doctor_id': {'required': True},
            'timeslot': {'required': True}
        }
        depth = 1
        # validation methods for testing
    def validate(self, data):
        # Custom validation logic can be added here if needed
        return data
    def create(self, validated_data):
        # Custom creation logic can be added here if needed
        return super().create(validated_data)
    def update(self, instance, validated_data):
        # Custom update logic can be added here if needed
        return super().update(instance, validated_data)
    def to_representation(self, instance):
        # Custom representation logic can be added here if needed
        return super().to_representation(instance)
    def from_representation(self, data):
        # Custom deserialization logic can be added here if needed
        return super().from_representation(data)
    def validate_patient_id(self, value):
        # Custom validation logic for patient_id
        if not isinstance(value, str):
            raise serializers.ValidationError("Invalid patient ID format.")
        return value
    def validate_doctor_id(self, value):
        # Custom validation logic for doctor_id
        if not isinstance(value, str):
            raise serializers.ValidationError("Invalid doctor ID format.")
        return value
    def validate_timeslot(self, value):
        # Custom validation logic for timeslot
        if not isinstance(value, str):
            raise serializers.ValidationError("Invalid timeslot format.")
        return value
    def validate_status(self, value):
        # Custom validation logic for status
        if value not in [choice[0] for choice in Appointment.Status.choices]:
            raise serializers.ValidationError("Invalid status value.")
        return value
    def validate_created_at(self, value):   
        # Custom validation logic for created_at
        if not isinstance(value, str):
            raise serializers.ValidationError("Invalid created_at format.")
        return value
    def validate_updated_at(self, value):   
        # Custom validation logic for updated_at
        if not isinstance(value, str):
            raise serializers.ValidationError("Invalid updated_at format.")
        return value
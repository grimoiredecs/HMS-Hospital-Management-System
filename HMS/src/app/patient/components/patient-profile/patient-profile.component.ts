import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent {
  patient = {
    id: 'P00123',
    name: 'Nguyễn Văn A',
    gender: 'Male',
    age: 35,
    dob: new Date('1990-03-10'),
    email: 'nguyenvana@example.com',
    phone: '+84 912345678',
    address: '123 Lê Lợi, Q1, HCMC',
    bloodGroup: 'O+',
    medicalHistory: 'Diabetes, Hypertension',
    avatarUrl: '' // Leave empty to test default
  };

  defaultAvatar = 'assets/images/default-avatar.png';

  onEdit(): void {
    // This could open a modal or navigate to an edit form
    console.log('Edit clicked for patient:', this.patient.name);
  }

  onDelete(): void {
    const confirmed = confirm(`Are you sure you want to delete ${this.patient.name}?`);
    if (confirmed) {
      // Handle deletion logic here
      console.log('Deleted patient:', this.patient.name);
    }
  }
}

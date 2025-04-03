import "admin.ts"

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl:'./add_staff.html', 
  styleUrls: ['./add_staff.css']
})

export class AddStaffComponent {
  template: string = 'add_staff.html';
}
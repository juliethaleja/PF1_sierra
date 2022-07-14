import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface user {
  id: number;
  name: string;
  lastname: string;
  age: number;
  gener: string;
  email: string;
}
@Component({
  selector: 'app-bma',
  templateUrl: './bma.component.html',
  styleUrls: ['./bma.component.scss'],
})
export class BmaComponent implements OnInit {
  formUser: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formUser = fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gener: ['', [Validators.required]],
      email: ['', [Validators.required]],
      
    });
  }


  ngOnInit(): void {}
  submit(form: FormGroup) {
    console.log(form.value.name);
  }
}

import { Component,EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users} from 'src/app/interface/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  formUser: FormGroup;
  isAddMode!: boolean;
  @Output() newUser = new EventEmitter<Users>();

  constructor(private fb: FormBuilder) { 
    this.formUser = fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gener: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.formUser.value.id;

  }
  AgregarUser() {
    if (this.isAddMode) {
      this.newUser.emit(this.formUser.value);
    } else {
    }
  }

}

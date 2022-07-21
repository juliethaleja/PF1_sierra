import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
export interface Users {
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
  userr :Array<any>=[{
   id: 1,
   name: 'julieth',
   lastname: 'julieth',
   age:12,
   gener: 'f',
   email: 'ema@jk'
 }];
  public displayedColumns: string[] = ['id', 'name', 'lastname', 'age','gener','email'];  
  public dataSource = this.userr;
  formUser: FormGroup;
  isAddMode!: boolean;

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
  submit() {
    console.log(this.isAddMode);
    if (this.isAddMode) {
      this.addUser();
    } else {
    }
  }

  addUser() {
    
    let User : Users={
      id: this.formUser.value.id,
      name: this.formUser.value.name,
      lastname: this.formUser.value.lastname,
      age: this.formUser.value.age,
      gener: this.formUser.value.gener,
      email: this.formUser.value.email,
    };
    this.userr.push(User);
    this.formUser.reset();
    
    console.log(this.userr);
  }



}


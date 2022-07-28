import { Component, OnInit, ViewChild } from '@angular/core';
import { Users} from 'src/app/interface/user';

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

  isAddMode!: boolean;

  constructor() {

  }

  ngOnInit(): void {
  }


  addUser(user:Users) {
    this.userr.push(user); 
  }



}


import { Component, OnInit,Input } from '@angular/core';
import { Users} from 'src/app/interface/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() ListUser: Users[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}

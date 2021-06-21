import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName:string;
  
  calculatePower:any;
  constructor() { }

  ngOnInit(): void {
    this.userName="Scientific Reasons";
    this.calculatePower=10;
  }

}

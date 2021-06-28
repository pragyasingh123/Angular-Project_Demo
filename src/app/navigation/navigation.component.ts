import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  NavComponent: any = [];
  IsLogin:boolean=false;
  userName:any;
  constructor() { 

  }
  ngOnInit(): void {
    this.NavComponent = [ 'Home','Tour','Contact','More' ];
    if(localStorage.getItem('IsLogin')!=null){
      debugger;
      this.IsLogin=true;
      this.userName=localStorage.getItem('userName');
    }
  }

  
}

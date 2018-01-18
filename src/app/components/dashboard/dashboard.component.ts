import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  toogle:string = null;
  constructor() {
    this.toogle=JSON.parse(localStorage.getItem('page'));
   }

  ngOnInit() {
  }

  changePage(page){
    localStorage.setItem('page',page);
    this.toogle=JSON.parse(localStorage.getItem('page'));
  }

  logout(){
    localStorage.removeItem('db');
    localStorage.removeItem('user');
    localStorage.removeItem('page');
  }

}

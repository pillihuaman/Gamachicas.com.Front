import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'serv-pillihuaman-sidebar-home',
  templateUrl: './serv-pillihuaman-sidebar-home.component.html',
  styleUrls: ['./serv-pillihuaman-sidebar-home.component.scss']
})
export class ServPillihuamanSidebarHomeComponent implements OnInit {

  nmMenu :NbMenuItem;
  constructor() { }

  ngOnInit(): void {
  }

  HideMenu():void
  {
    
  }

}

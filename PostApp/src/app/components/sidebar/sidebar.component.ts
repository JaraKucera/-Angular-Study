import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private rr: Router) { 
    rr.events.subscribe((_: NavigationEnd) => this.currentUrl = this.rr.url)
  }

  ngOnInit() {
  }

}

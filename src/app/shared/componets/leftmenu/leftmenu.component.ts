import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-leftmenu',
  templateUrl: '../../views/leftmenu/leftmenu.component.html'
})
export class LeftmenuComponent {
  role_type: any;

  constructor(
    public _route: Router
  ) { }

  ngOnInit() {

  }

  /*  It will clear the Local Storage  and move it  to the Login Page  */
  logout() {
    localStorage.clear();
    this._route.navigate(['']);
  }
  /* ..............................completed ......................... */
}

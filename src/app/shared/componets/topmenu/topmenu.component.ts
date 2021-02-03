import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-topmenu',
  templateUrl: '../../views/topmenu/topmenu.component.html',
})
export class TopmenuComponent implements OnInit {

  loggedinUserData: any;
  RoleData: any;
  userName: any;
  userImage: string;

  constructor(public _router: Router) { }

  ngOnInit() {
  }


  /* this functionality Will clear the Local Storage And move to the login page */
  logout() {

    localStorage.clear();
    this._router.navigate(['']);
  }
  /* .............................completed ................... */

}

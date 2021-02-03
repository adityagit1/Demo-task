import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  ngOnInit() {
    /* if the User is alrady login
     and he refresh the Page and he Do
      not Logout so directaly it will take to the DashBorad Page
      (if the Token is define it wil take to the DashBorad Page)  */
      
    
      // console.log(this._location.path());
      // this._route.navigate([UrlConstant.LOGIN_PATH])
    

  }
}

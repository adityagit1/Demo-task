import { Component } from '@angular/core';
import 'datatables.net';
import 'datatables.net-bs4';
import { ToastrService } from 'ngx-toastr';
import * as data from '../../emp.json';


@Component({
  selector: 'employee',
  templateUrl: '../../views/employee/employee.component.html'
})

export class EmployeComponent {

  /* using this method to call json */
  empList: any[] = [];


  constructor(
    private _tosterService: ToastrService) {

  }

  ngOnInit() {

    this.empList = (data as any).default;
    console.log(this.empList);


  }

  isNumberOrString(phoneNo) {
    if (/^\d+$/.test(phoneNo)) {
      return phoneNo
      // Validation failed
    }else{

      return 'N/A'
    }

  }



}

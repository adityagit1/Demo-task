
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import * as data from '../../emp.json';

@Component({
  selector: 'add-update-employee',
  templateUrl: '../../views/employee/addupdate-employee.component.html'
})

export class AddUpdateEmployeeComponent {

  subscrbie: Subscription;
  empForm: FormGroup
  id: any;
  addOrUpdate: any;
  empList: any;


  constructor(
    private _route: Router,
    private _formbuilder: FormBuilder,
    private _tosterServices: ToastrService,
    private _activatedRouting: ActivatedRoute) {
    this.formEmp()
  }



  formEmp() {

    this.empForm = this._formbuilder.group({
      "name": ['', [Validators.required, Validators.minLength(4)]],
      "phone": ['', [Validators.required]],
      "city": ['',],
      "address1": [''],
      "address2": ['',],
      "postal_code": ['']
    })
  }

  ngOnInit() {
    this._activatedRouting.params.subscribe((params: any) => {
      this.id = params['id'];
    });

    this.isAddOrEdit()
  }

  get formError() {
    return this.empForm.controls;
  }



  isAddOrEdit() {
    if (this.id) {
      var employeData;
      this.addOrUpdate = "Edit"
      this.empList = (data as any).default;

      employeData = this.empList.filter(x => x.id == this.id)[0]

      // console.log(employeData);
      this.empForm.controls.name.setValue(employeData.name)
      this.empForm.controls.phone.setValue(employeData.phone)
      this.empForm.controls.city.setValue(employeData.address.city)
      this.empForm.controls.address1.setValue(employeData.address.address_line1)
      this.empForm.controls.address2.setValue(employeData.name)
      this.empForm.controls.postal_code.setValue(employeData.address.postal_code)


    } else {
      this.addOrUpdate = "Add"
    }
  }



  resetForm() {
    this.formEmp()
  }

  addUpdateEmplyoe() {
    if (this.empForm.valid) {
      if (this.id) {
        this._tosterServices.success("Your Recorad is Updated But Could not be Edited Beacuse not havig  any Databases")

        this._route.navigate(['/employee'])
      } else {
        this._tosterServices.success("Your Recorad is Updated But Could not be Add Beacuse not havig  any Databases")
        this._route.navigate(['/employee'])

      }




    }

  }



}

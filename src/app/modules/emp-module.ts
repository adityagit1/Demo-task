import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeMangerComponet } from '../components/employee-manger/employe-manger.component.ts';
import { EmployeComponent } from '../components/employee-manger/employe.component';
import { AddUpdateEmployeeComponent } from '../components/employee-manger/add-update-emplote.component';
import { FilterPipe } from '../pipe/filter.pipe';
import { FooterModule } from '../shared/modules/footer.module';
import { LeftmenuModule } from '../shared/modules/leftmenu.module';
import { TopmenuModule } from '../shared/modules/topmenu.module';

const routes: Routes = [
  {
    path: '', component: EmployeeMangerComponet,
    children: [
      { path: '', component: EmployeComponent },
      { path: 'add', component: AddUpdateEmployeeComponent },
      { path: ':id/edit', component: AddUpdateEmployeeComponent }
    ]
  },
];

@NgModule({
  declarations: [EmployeeMangerComponet,
    AddUpdateEmployeeComponent,
    FilterPipe,
    EmployeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LeftmenuModule,
    TopmenuModule,
    FormsModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeMangersModule {
}

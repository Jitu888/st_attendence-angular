import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {FillAttendenceComponent} from './fill-attendence/fill-attendence.component'
import {GetStudentDetailComponent} from './get-student-detail/get-student-detail.component'
const routes: Routes = [
  {
    component:AddStudentComponent,
    path:'add'
  },
  {
    component:FillAttendenceComponent,
    path:'attendence'
  },
  {
    component:GetStudentDetailComponent,
    path:'details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

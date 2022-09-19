import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {FillAttendenceComponent} from './fill-attendence/fill-attendence.component'
import {GetStudentDetailComponent} from './get-student-detail/get-student-detail.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
 {
  component:HomeComponent,
  path:""

 },

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
  },
  {path:"**",
component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

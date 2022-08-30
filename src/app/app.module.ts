import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FillAttendenceComponent } from './fill-attendence/fill-attendence.component';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { GetStudentDetailComponent } from './get-student-detail/get-student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    FillAttendenceComponent,
    GetStudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

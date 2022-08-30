import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

result:any=[]
  constructor(private http:HttpClient) { }
addstudent:any = new FormGroup({
  name:new FormControl(''),
  class:new FormControl(''),
  section:new FormControl(''),
  RollNo:new FormControl(''),
  Gender:new FormControl(''),
  profile:new FormControl(File),
  Dob:new FormControl(''),
  Year:new FormControl('')
})
  ngOnInit(): void {}
  upload_student_img(e:any){
   console.warn(e.target.files[0])
   this.addstudent.get("profile").setValue(e.target.files[0])
   console.warn(this.addstudent)
  }
  OnSubmit(data:any){
    console.warn(data)
    this.http.post(`http://localhost:5000/add_student_detail`,{body:JSON.stringify(this.addstudent)}).
    subscribe({
      next: (r:any) => {this.result = r?.result;},
      error: (err:any) =>{
          console.error('Observer got an error:', err)},
          complete: () => {console.log('Observer got a complete notification')},
      
    })
  }
}


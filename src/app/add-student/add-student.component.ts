import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import{ToastrService} from 'ngx-toastr'
import * as bootstrap  from 'bootstrap';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
userImg:any=[]
result:any=[]
model:any;
res:any=[]
  constructor(private http:HttpClient, private toaster:ToastrService) { }
addstudent = new FormGroup({
  name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  class:new FormControl('',[Validators.required]),
  section:new FormControl('',[Validators.required]),
  rollNo:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required]),
  profile:new FormControl(File,[Validators.required]),
  dateOfBirth:new FormControl('',[Validators.required]),
  year:new FormControl('',[Validators.required])
})
  ngOnInit(): void {}
  upload_student_img(e:any){
    console.log(e)
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        
     this.userImg = reader.result
        this.userImg = reader.result}
   this.addstudent.patchValue({profile:e.target.files[0]})
  
  }
  
  OnSubmit(data:any){
    console.warn(this.addstudent.get)
    const formData:any = new FormData()
      formData.append('profile', this.addstudent.value.profile)
      formData.append('name', this.addstudent.value.name)
      formData.append('class', this.addstudent.value.class)
      formData.append('section', this.addstudent.value.section)
      formData.append('rollNo', Number(this.addstudent.value.rollNo))
      formData.append('gender', this.addstudent.value.gender)
      formData.append('dateOfBirth', this.addstudent.value.dateOfBirth)
      formData.append('year',Number( this.addstudent.value.year))
      
      
      
      
      this.http.post(`http://localhost:5000/add_student_detail`,formData).
      subscribe({
        next: (r:any) => {this.result = r;console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!",this.result,r) ;this.firetoster()},
        error: (err:any) => { this.res = (err.error.error); console.log("...........",err.error.error,this.res) ;this.firetoste()},
        })
      }
      
      firetoster(){
        const toastLiveExample: any = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(toastLiveExample, { animation: true, delay: 1000 })
        toast.show()
      }
      firetoste(){
        const toastLiveExample: any = document.getElementById('live')
        const toast = new bootstrap.Toast(toastLiveExample, { animation: true, delay: 1000 })
        toast.show()
      }
     
      get name(){
        return this.addstudent.get('name')
      }
      get class(){
        return this.addstudent.get('class')
      }
      get section(){
        return this.addstudent.get('section')
      }
      get rollNo(){
        return this.addstudent.get('rollNo')
      }
      get gender(){
        return this.addstudent.get('gender')
      }
      get dateOfBirth(){
        return this.addstudent.get('dateOfBirth')
      }
      get year(){
        return this.addstudent.get('year')
      }
      get profile(){
        return this.addstudent.get('profile')
      }
   
  



    }
    
   



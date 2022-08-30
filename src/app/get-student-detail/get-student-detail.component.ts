import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-student-detail',
  templateUrl: './get-student-detail.component.html',
  styleUrls: ['./get-student-detail.component.scss']
})
export class GetStudentDetailComponent implements OnInit {
  result:any = [];
  constructor( private http: HttpClient) { }
  ngOnInit(): void {
      
    this.http.get('http://localhost:5000/get_student_deatils').
    subscribe({
      next: (r:any) => {this.result = r?.result;console.warn(this.result)},
      error: (err:any) =>{
          console.error('Observer got an error:', err)
      } 
    })
    
  }}



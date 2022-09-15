import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-fill-attendence',
  templateUrl: './fill-attendence.component.html',
  styleUrls: ['./fill-attendence.component.scss']
})
export class FillAttendenceComponent implements OnInit {
  click: boolean = false;
  sec: any = []
  mon: any = []
  result: any = []
  res: any = []
  report:any=[]
  reqUrl: any = `http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=3`


  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  
  select_month(m: any) {
    const month = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
    const d = new Date(m.value)
    let name = month[d.getMonth()];
    this.mon = name
    console.log(this.mon)
  }

  select_class(e: any) {
    this.res = e.value
    console.log(this.res)

  }


  select_section(s: any) {
    console.log(s.value)
    this.sec = s.value
    console.log(this.res)


    this.http.get(`http://localhost:5000/get_student_deatils?class=${this.res}&section=${s.value}`).
      subscribe({
        next: (r: any) => {this.result= r;console.log(r.length); console.warn(":::::::::::::::::",this.report); console.warn("------------------",this.result) },
        error: (err: any) => {
          console.error('Observer got an error:', err)
        }
        
      })
      
  }


  presentAttendence(r: any) {
    console.log(r)

    const data = { "Attendence": "P", "month": `${this.mon}` }
    this.http.patch(`http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=${r}`, data)
      .subscribe({
        next: (value: any) => {
          console.log("value : ", value)
        },
        error: (err) => {
          console.log("Error : ", err)
        }
      })
    this.click = !this.click;



  }
  absentAttendence(r: any) {
    const data = { "Attendence": "A", "month": `${this.mon}` }
    this.http.patch(`http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=${r}`, data)
      .subscribe({
        next: (value: any) => {
          console.log("value : ", value)
        },
        error: (err) => {
          console.log("Error : ", err)
        }
      })

  }


  firetoster() {
    const toastLiveExample: any = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample, { animation: true, delay: 4000 })
    toast.show()
  }


  fire(e: any) {
    console.log(e)
    this.firetoster()

  }


}


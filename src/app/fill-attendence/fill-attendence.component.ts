import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as bootstrap from 'bootstrap';
import { FormGroup ,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fill-attendence',
  templateUrl: './fill-attendence.component.html',
  styleUrls: ['./fill-attendence.component.scss']
})
export class FillAttendenceComponent implements OnInit {
  highlightbtn: any = true;
  counter: any = 0
  btnstate: boolean = false;
  sec: any = []
  mon: any = []
  result: any = []
  res: any = []
  report:any=[]
  reqUrl: any = `http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=3`
  warnMsg:any=''
  isUnchanged = true;
  arr:any=[]
  roll:any=[]
  
  
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


  highlight() {
    var res = this.counter == this.result.length ? false: true
    console.log("pppppppppppppppppppppppp",this.counter)
      return res;
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
    this.arr.push(data.Attendence)
    this.roll.push(r)
    console.log(this.arr)
    this.btnstate = true
    this.counter++;

    // this.http.patch(`http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=${r}`, data)
    //   .subscribe({
    //     next: (value: any) => {
    //       this.warnMsg = value
    //       console.log("value : ", value);
    //     },
    //     error: (err) => {
    //       console.log("Error : ", err)
    //     }
    //   })
    // this.click = !this.click;



  }
  absentAttendence(r: any) {
    const data = { "Attendence": "A", "month": `${this.mon}` }
    this.arr.push(data.Attendence)
    this.roll.push(r)
    console.log(this.arr,this.roll)
    this.btnstate = true
    this.counter++;
    console.log("kkkkkkkkkkkkkkkkkkkkkkkk",this.roll)

    // this.http.patch(`http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=${r}`, data)
    //   .subscribe({
    //     next: (value: any) => {
    //       this.warnMsg = value
    //       console.log("value : ", value,"msg",this.warnMsg)
    //     },
    //     error: (err) => {
    //       console.log("Error : ", err)
    //     }
    //   })

  }
  resetAttendence(r:any){
    this.counter--;
    
    console.log("-----------------------+++++++++++++++++++++",r)
    let e = this.arr.length
    this.arr.pop()
    this.roll.pop()
    // this.btnstate = false



    //==============================
    
const index = this.roll.indexOf(r);
if (index > -1) { // only splice array when item is found
  let a =this.roll.splice(index); // 2nd parameter means remove one item only
  console.log("-------ppppaaaaaaaaaaaaaa",a)
}
console.log("first-arr",this.roll)
  }

  



   onsubmit(){
    
    for(let i=0,j=0;i<this.arr.length||j<this.roll.length;i++,j++){
    
      this.http.patch(`http://localhost:5000/fill_attendence?class=${this.res}&section=${this.sec}&rollNo=${this.roll[j]}`, { "Attendence": `${this.arr[i]}`, "month": `${this.mon}` })
      .subscribe({
        next: (value: any) => {
          this.warnMsg = value
          console.log("value : ", value,"msg",this.warnMsg );this.arr = [];this.roll = [];
        },
        error: (err) => {
          console.log("Error : ", err)
        }
      })
      this.firetoster()

    }

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


import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-get-student-detail',
  templateUrl: './get-student-detail.component.html',
  styleUrls: ['./get-student-detail.component.scss']
})
export class GetStudentDetailComponent implements OnInit {
  d:any=[]
  roll: any = ''
  section: any = ''
  class: any = ''
  myroll: any = ''
  myclass: any = ''
  mysection: any = ''
  userImg: any = []
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  res: any = [];
  result: any = [];
  closeResult: any = [];
  picResult: any = [];
  re: any = [];
  date: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
   att:any=""
  edit = new FormGroup({
    name: new FormControl(''),
    class: new FormControl(''),
    section: new FormControl(''),
    rollNo: new FormControl(''),
    gender: new FormControl(''),
    dateOfBirth: new FormControl(''),
    year: new FormControl('')
  })

  constructor(private http: HttpClient, private modalService: NgbModal,) { }
  upload = new FormGroup({
    profile: new FormControl(File)
  })
  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.http.get('http://localhost:5000/get_student_deatils').
      subscribe({
        next: (r: any) => { this.result = r?.result; console.log(this.result) },
        error: (err: any) => {
          console.error('Observer got an error:', err)
        }
      })

  }
  select_month(e: any) {
    this.res = e.value
    //console.log(e.value)
   // console.log(this.res)

  }



  open(content: any, stud: any) {
    this.class = stud.class
    this.section = stud.section
    this.roll = stud.rollNo

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  update(content: any, stud: any) {
    this.myclass = stud.class
    this.mysection = stud.section
    this.myroll = stud.rollNo
   
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  upload_student_img(e: any) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result)
      this.userImg = reader.result
      this.userImg = reader.result

      this.upload.patchValue({ profile: e.target.files[0] })

    }
  }


  OnSubmit(data: any) {
    // console.log(roll)
    console.log(data, this.upload.value.profile)
    const formData: any = new FormData()
    formData.append('profile', this.upload.value.profile)
    this.http.patch(`http://localhost:5000/update_pic?class=${this.myclass}&section=${this.mysection}&rollno=${this.myroll}`, formData).
      subscribe({
        next: (r: any) => { this.result = r?.result; this.getdata() },
        error: (err: any) => { JSON.stringify(err.error) },
      })
    this.getdata()
  }


  onedit(a:any) {
    console.log( this.class, this.section, this.roll)
    const data = { "name": a.name, "class": a.class, 'section': a.section, 'rollNo': a.rollNo, "gender": a.gender, "dateOfBirth": a.dateOfBirth, "year": a.year }
    this.http.patch(`http://localhost:5000/edit_profile?class=${this.class}&section=${this.section}&rollno=${this.roll}`, data).
      subscribe({
        next: (r: any) => { this.re = r?.result; console.log(this.re), this.getdata() },
        error: (err: any) => { JSON.stringify(err.error) },
      })
    this.getdata()


  }
  handleMonth(e: any, stud: any, ind: any) {
    const month = e?.target?.value || 'jan';
    // console.log("kya month h",month)
    console.log("ye kya h", stud)
    console.log("ye kya behuda harkat h", ind)
    this.result[ind].selectedMonth = stud[month]
    console.log( ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",this.result[ind].selectedMonth)
    this.att = this.result[ind].selectedMonth
   // console.log("999999999999999999999999999999999",this.att[0])
    // for(let i = 1;i<=this.att.length;i++){
    //    console.log(i)
    //    this.d = i
    // }

   // console.log("!2345678",this.att)
  }
  onTableDataChange(event: any) {
    this.page = event;

  }

  handlePageSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;

  }
  


}



function indexof(arg0: number) {
  throw new Error('Function not implemented.');
}


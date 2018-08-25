import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,FormArray ,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-sugtons',
  templateUrl: './sugtons.component.html',
  styleUrls: ['./sugtons.component.css']
})
export class SugtonsComponent implements OnInit {
  rForm:FormGroup;
  onsubcom = false;
  constructor(private http : HttpClient,meta : Meta,title: Title) {
    title.setTitle('suggest Guidals');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "How to start coding, Where to start coding, how to code, Guidals"
      },
      {
        name : "Description" , content : "Hi, there give your valuable suggestions to help us improve our content and user interface. If you don't have any, well then you can write us a thank you note ;-)"
      }
    ]);
  }


  ngOnInit() {
    this.rForm = new FormGroup(
    {
      'name': new FormControl('',[Validators.required]),
       'email': new FormControl('',[Validators.required,Validators.email]),
       'newsteler': new FormControl(true,Validators.required),
       'about': new FormControl('',Validators.required),
        'descrip': new FormControl('',Validators.required)
    });
  }
  onSubmit(){
    if(this.rForm.valid){
     this.http.post<FormGroup>("http://ec2-35-154-219-81.ap-south-1.compute.amazonaws.com:8080/sugest",this.rForm.value).toPromise();
     this.rForm.reset();
     this.rForm.controls['newsteler'].setValue(true);
     this.onsubcom=true;
     setTimeout(()=>{
       this.onsubcom=false;
     },400);
   }
 }
}

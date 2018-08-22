import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class Resnm{
}
@Injectable()
export class ResnmService{
  private resnm : Resnm[];
  resnmchanged  = new Subject<Resnm[]>();
  constructor(private http:HttpClient){}
  getNameId(){
    this.http.get('http://ec2-13-233-7-96.ap-south-1.compute.amazonaws.com:8080/getnmid').subscribe(
      (resn : Resnm[])=>{
         this.resnm = resn;
         this.resnmchanged.next(this.resnm);
      }
    );
  }
  getresnm(){
    return this.resnm;
  }
}

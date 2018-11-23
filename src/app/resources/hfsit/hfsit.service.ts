import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

export class Hform{
  public id : number;
	public name : string;
  public logurl : string;
  public lnkto : string;
	public creanm : string;
	public describ : string;
}
@Injectable()
export class HfsitService{
  constructor(private http : HttpClient){}
  hfro : Hform[];
  Hforchanged  = new Subject<Hform[]>();
  getHfrm(){
    this.http.get('http://ec2-52-66-253-220.ap-south-1.compute.amazonaws.com:8080/helpfor').subscribe(
      (hfm : Hform[])=>{
         this.hfro = hfm;
         this.Hforchanged.next(this.hfro);
      }
    );
   }
}

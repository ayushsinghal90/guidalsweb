import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

export class Freesite{
  public id : number;
	public chname : string;
	public crename : string;
	public logurl : string;
	public descri : string;
	public lnkto : string;
}
@Injectable()
export class FretusitService{
  constructor(private http : HttpClient){}
  frst : Freesite[];
  Frsitchanged  = new Subject<Freesite[]>();
  getFrs(){
    this.http.get('http://ec2-13-233-7-96.ap-south-1.compute.amazonaws.com:8080/freesites').subscribe(
      (frsit : Freesite[])=>{
         this.frst = frsit;
         this.Frsitchanged.next(this.frst);
      }
    );
   }
}

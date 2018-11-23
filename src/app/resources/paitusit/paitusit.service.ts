import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

export class Paisit{
  public id : number;
	public name : string;
	public logourl : string;
	public lnkto : string;
  public creanm : string;
	public describ : string;
}
@Injectable()
export class PaitusitService{
  constructor(private http : HttpClient){}
  pasit : Paisit[];
  Psitchanged  = new Subject<Paisit[]>();
  getPfrm(){
    this.http.get('http://ec2-52-66-253-220.ap-south-1.compute.amazonaws.com:8080/paidsites').subscribe(
      (past : Paisit[])=>{
         this.pasit = past;
         this.Psitchanged.next(this.pasit);
      }
    );
   }
}

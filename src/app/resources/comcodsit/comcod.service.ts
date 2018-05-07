import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

export class Comsit{
  public id : number;
	public name : string;
	public crename : string;
	public logurl : string;
	public lnkto : string;
	public describ : string;
}
@Injectable()
export class ComcodService {
  constructor(private http : HttpClient){}
  comst : Comsit[];
  comstchanged  = new Subject<Comsit[]>();
  getCom(){
    this.http.get('http://ec2-35-154-112-61.ap-south-1.compute.amazonaws.com:8080/compitsite').subscribe(
      (comsit : Comsit[])=>{
         this.comst = comsit;
         this.comstchanged.next(this.comst);
      }
    );
   }
  }

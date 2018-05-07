import { Component, OnInit } from '@angular/core';
import { ResnmService ,Resnm } from '../shared/resnm.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   resn : Resnm[];
   show = true;
  constructor(private reser : ResnmService){
  }

  ngOnInit() {
    this.resn=this.reser.getresnm();
    this.reser.resnmchanged.subscribe((res : Resnm[])=>{this.resn=res;});
  }
  onhd(){
    if(!this.show){
      this.show=true;
    }
  }
  onmenu(){
    this.show = !this.show;
  }
}

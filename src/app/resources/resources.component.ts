import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ResnmService ,Resnm} from '../shared/resnm.service';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit,OnDestroy {
  res : Resnm[];
  access =false;
  shown =false;
  constructor(private reser : ResnmService,private router : Router,private route : ActivatedRoute) {
 }
  ngOnInit() {
    this.res=this.reser.getresnm();
    this.reser.resnmchanged.subscribe((res : Resnm[])=>{this.res=res;});
  }
  ngOnDestroy(){
  }
  onClick(){
      this.access=!this.access;
      this.shown=false;
  }
  show(){
    this.shown=!this.shown;
  }
}

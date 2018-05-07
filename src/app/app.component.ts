import { Component,OnInit } from '@angular/core';
import { ResnmService } from './shared/resnm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private reser : ResnmService){
}
  ngOnInit(){
      this.reser.getNameId();
  }
}

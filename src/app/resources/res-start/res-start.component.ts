import { Component, OnInit } from '@angular/core';
import { ResnmService ,Resnm} from '../../shared/resnm.service';
import { Router ,ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-res-start',
  templateUrl: './res-start.component.html',
  styleUrls: ['./res-start.component.css','../sharedcss/contst.css']
})
export class ResStartComponent implements OnInit {
   resn : Resnm[];
   html : string;
  constructor(private reser : ResnmService,private router : Router,private route : ActivatedRoute,meta : Meta,title: Title) {
    title.setTitle('Guidals-Resouces');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "How to start coding, Where to start coding, how to code, Guidals"
      },
      {
        name : "Description" , content : "This is our resource menu we some great content with topics on how to start coding, best practice while coding list of programming sites and content on programming language. You just one click away to explore all this content."
      }
    ]);
   }

  ngOnInit() {
    // this.html ="<script type='text/javascript' language='javascript' src='http://c.amazon-adsystem.com/aax2/assoc.js'></script>";
    this.resn=this.reser.getresnm();
    this.reser.resnmchanged.subscribe((res : Resnm[])=>{this.resn=res;});
  }
}

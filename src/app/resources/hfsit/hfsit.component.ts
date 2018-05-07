import { Component, OnInit } from '@angular/core';
import { Hform,HfsitService } from './hfsit.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hfsit',
  templateUrl: './hfsit.component.html',
  styleUrls: ['../sharedcss/common.css','../sharedcss/contst.css']
})
export class HfsitComponent implements OnInit {
   hform : Hform[];
  constructor(private hfrsrv : HfsitService,meta : Meta,title: Title) {
    title.setTitle('List of programming forums');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "List of forums, help forums, Coding forums,programming forums,How to start coding, Where to start coding, how to code, Guidals"
      },
      {
        name : "Description" , content : "Online Forums help Developer community to communicate with each other, coders post their problems here and developers around the world post solution to there problem. You should create an account in some of these forums."
      }
    ]);
   }

  ngOnInit() {
    this.hfrsrv.getHfrm();
    this.hfrsrv.Hforchanged.subscribe((hfrms : Hform[])=>{this.hform=hfrms;});
  }

}

import { Component, OnInit } from '@angular/core';
import { Freesite, FretusitService } from './fretusit.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fretusit',
  templateUrl: './fretusit.component.html',
  styleUrls: ['../sharedcss/common.css','../sharedcss/contst.css']
})
export class FretusitComponent implements OnInit {
   freecon : Freesite[];
  constructor(private frsit : FretusitService ,meta : Meta,title: Title) {
    title.setTitle('Free Channels for Programming language');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "How to start coding, Where to start coding, how to code, list of programming channels, top tutorial channels, Guidals"
      },
      {
        name : "Description" , content : "Here is the list of some free tutorial channel with most of them regularly updating their content. All the channels listed here provide free knowledge of the programming language you can always refer to these channels to increase your knowledge."
      }
    ]);
  }

  ngOnInit() {
    this.frsit.getFrs();
    this.frsit.Frsitchanged.subscribe((frsti : Freesite[])=>{this.freecon=frsti;});
  }

}

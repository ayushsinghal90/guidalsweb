import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bespraccod',
  templateUrl: './bespraccod.component.html',
  styleUrls: ['../sharedcss/hbcom.css','../sharedcss/contst.css','../sharedcss/common.css']
})
export class BespraccodComponent implements OnInit {

  constructor(meta : Meta,title: Title) {
    title.setTitle('Best Practice while coding');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "Best technique while coding, Create perfect code, How to create perfect code, Error to avoid while coding, Guidals"
      },
      {
        name : "Description" , content : "This page cover all solution to the problem faced by programmers while coding just have a look at these points and you get to know how to deal with it."
      }
    ]);
  }


  ngOnInit() {

  }

}

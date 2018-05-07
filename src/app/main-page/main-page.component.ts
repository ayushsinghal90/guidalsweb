import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(meta : Meta,title: Title) {
        title.setTitle('Guidals,Your personal Guide');
        meta.addTags([
          {
            name : "author", content:"Guidals creator"
          },
          {
            name: "Keywords" , content: "How to start coding, Where to start coding, how to code, Guidals"
          },
          {
            name : "Description" , content : "Want to start coding or just thinking to learn a new coding language then you have just stumbled across the right link.We provide links to some best resource content for the programming language you want to learn. Let's get started."
          }
        ]);
   }

  ngOnInit() {
  }

}

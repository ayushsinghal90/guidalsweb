import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','../shared/maincom.css']
})
export class AboutComponent implements OnInit {

  constructor(meta : Meta,title: Title) {
        title.setTitle('About Guidals');
        meta.addTags([
          {
            name : "author", content:"Guidals creator"
          },
          {
            name: "Keywords" , content: "How to start coding, Where to start coding, how to code, Guidals"
          },
          {
            name : "Description" , content : "We at GUIDALS are working hard to add all the links to resources for all available programming language. For the beginning, we are only focused on programming, but we promise to expand fields if this goes well."
          }
        ]); }

  ngOnInit() {
  }

}

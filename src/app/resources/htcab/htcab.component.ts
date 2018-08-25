import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-htcab',
  templateUrl: './htcab.component.html',
  styleUrls: ['../sharedcss/hbcom.css','../sharedcss/contst.css','../sharedcss/common.css','../../ads/adsty.css']
})
export class HtcabComponent implements OnInit {

  constructor(meta : Meta,title: Title) {
        title.setTitle('How to code as beginner');
        meta.addTags([
          {
            name : "author", content:"Guidals creator"
          },
          {
            name: "Keywords" , content: "How to start coding, Where to start coding, how to code,when to start coding, Guidals"
          },
          {
            name : "Description" , content : "The most common question of a student who want to start programming is how to start learning programming language. Well know you are on the right page to find the answer to that question. First and for most you need to have that hunger to learn more and practice every day."
          }
        ]);
   }

  ngOnInit() {
  }

}

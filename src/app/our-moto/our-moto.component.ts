import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-moto',
  templateUrl: './our-moto.component.html',
  styleUrls: ['./our-moto.component.css','../shared/maincom.css']
})
export class OurMotoComponent implements OnInit {

  constructor(meta : Meta,title: Title) {
        title.setTitle('OUR MOTO - Guidals');
        meta.addTags([
          {
            name : "author", content:"Guidals creator"
          },
          {
            name: "Keywords" , content: "How to start coding, Where to start coding, how to code, Guidals"
          },
          {
            name : "Description" , content : " Today there is more knowledge on the web than on any library around the world. Our goal at GUIDALS is helping make the youth realize that there are a number of easy ways to do a thing then to leave,"
          }
        ]);
       }

  ngOnInit() {
  }

}

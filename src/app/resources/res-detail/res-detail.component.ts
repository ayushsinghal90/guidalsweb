import { Component, OnInit } from '@angular/core';
import { Content } from './resShared/content.model';
import { ActivatedRoute,Data } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-res-detail',
  templateUrl: './res-detail.component.html',
  styleUrls: ['./res-detail.component.css','../sharedcss/common.css','../sharedcss/contst.css','../../ads/adsty.css']
})
export class ResDetailComponent implements OnInit {
   cont : Content;
  constructor(private route : ActivatedRoute,meta : Meta,title: Title) {
    route.data.subscribe((data:Data)=>{
      this.cont = data['content'];
    });
    title.setTitle('Start learning '+this.cont.title);
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: 'how to learn '+this.cont.title+',how code in '+this.cont.title+',where to learn '+this.cont.title+'Guidals'
      },
      {
        name : "Description" , content : 'Here are all the links to resources that will help you learn '+this.cont.title+'. Our review is unbaised , these links will take you to some of the best course around the internet'
      }
    ]);
   }
  ngOnInit(){


  }

}

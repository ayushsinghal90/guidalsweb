import { Component, OnInit } from '@angular/core';
import { Comsit,ComcodService } from './comcod.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comcodsit',
  templateUrl: './comcodsit.component.html',
  styleUrls: ['../sharedcss/common.css','../sharedcss/contst.css','../../ads/adsty.css']
})
export class ComcodsitComponent implements OnInit {
  comst : Comsit[];
  constructor(private coms :ComcodService,meta : Meta,title: Title) {
    title.setTitle('List of Competitve sites');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "Top Competitive sites, Competitive sites, Improve programming skills, Guidals"
      },
      {
        name : "Description" , content : "Here are some sites where you can polish your coding skills through competitive programming.These sites contain problem in different domains you can choose your domain to start with."
      }
    ]);
  }

  ngOnInit() {
   this.coms.getCom();
   this.coms.comstchanged.subscribe((comsi : Comsit[])=>{this.comst=comsi;});
  }

}

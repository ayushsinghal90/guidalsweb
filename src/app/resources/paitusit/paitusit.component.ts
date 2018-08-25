import { Component, OnInit } from '@angular/core';
import { Paisit,PaitusitService } from './paitusit.service';
import { ActivatedRoute , Data } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-paitusit',
  templateUrl: './paitusit.component.html',
  styleUrls: ['../sharedcss/common.css','../sharedcss/contst.css','../../ads/adsty.css']
})
export class PaitusitComponent implements OnInit {
  paisit : Paisit[];
  constructor(private paserv : PaitusitService,meta : Meta,title: Title) {
    title.setTitle('Paid tutorials sites');
    meta.addTags([
      {
        name : "author", content:"Guidals creator"
      },
      {
        name: "Keywords" , content: "Best site for programming tutorials,How to start coding, Where to start coding, how to code, Guidals"
      },
      {
        name : "Description" , content : "Here is the list of some websites offering paid tutorials. These websites offer a certificate for courses they offer. This page gives you a preview of the course they offer and they have guidelines for creators..."
      }
    ]);
  }

  ngOnInit() {
    this.paserv.getPfrm();
    this.paserv.Psitchanged.subscribe((pfrms : Paisit[])=>{this.paisit=pfrms;});
  }

}

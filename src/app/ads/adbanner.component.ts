import {Component,OnInit,AfterViewInit,Input, OnDestroy } from '@angular/core'
// data-ad-slot="4673998918"

    @Component({
      selector: 'google-adsense',
      template: ` <div>
                      <ins class="adsbygoogle"
                           style="display:block"
                           data-ad-client="ca-pub-2207525801603708"
                           [attr.data-ad-slot]="data"
                           data-ad-format="auto"
                           data-full-width-responsive="true">
                      </ins>
                 </div>
                  <br>
      `,
      styleUrls: ['./adsty.css']
    })
export class AdBannerComponent implements AfterViewInit {
      @Input() data;
      constructor() {
      }

      ngAfterViewInit() {
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
          }catch(e){
            console.error("error");
          }
        },2000);
     }
     ngOnDestroy() {
	  this.data = null;
  }

    }

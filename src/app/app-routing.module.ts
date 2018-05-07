import { NgModule } from '@angular/core';
import { Routes,RouterModule,PreloadAllModules } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { OurMotoComponent } from './our-moto/our-moto.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { SugtonsComponent } from './sugtons/sugtons.component';
import { NoPageComponent } from './no-page/no-page.component';

import { BespraccodComponent } from './resources/bespraccod/bespraccod.component';
import { ComcodsitComponent } from './resources/comcodsit/comcodsit.component';
import { FretusitComponent } from './resources/fretusit/fretusit.component';
import { PaitusitComponent } from './resources/paitusit/paitusit.component';
import { ResDetailComponent } from './resources/res-detail/res-detail.component';
import { ResDetailResolve } from './resources/res-detail/res-detail.resolve.service';
import { HtcabComponent } from './resources/htcab/htcab.component';
import { ResStartComponent } from './resources/res-start/res-start.component';
import { HfsitComponent } from './resources/hfsit/hfsit.component';

const routes : Routes=[
  {path : '',component:MainPageComponent},
  {path : 'ourmoto',component:OurMotoComponent},
  {path : 'aboutus',component:AboutComponent},
  { path : 'resources',component:ResourcesComponent,children:[
      {path : '', component: ResStartComponent},
      {path : 'howtoprmasbeginr',component:HtcabComponent},
      {path : 'bestpracticewhilecoding',component:BespraccodComponent},
      {path : 'competitivecodingsites',component:ComcodsitComponent},
      {path : 'freetutorialsites',component:FretusitComponent},
      {path : 'paidtutorialsites',component:PaitusitComponent},
      {path : 'helpformsites',component:HfsitComponent},
      {path : 'languagedetails/:name/:id',component : ResDetailComponent,resolve: {content :ResDetailResolve}}
  ]},
  {path : 'suggestion',component:SugtonsComponent},
  {path : '**',component : NoPageComponent}
]
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{
}

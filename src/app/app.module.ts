import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OurMotoComponent } from './our-moto/our-moto.component';
import { SugtonsComponent } from './sugtons/sugtons.component';
import { AboutComponent } from './about/about.component';
import { ResnmService } from './shared/resnm.service';
import { AppRoutingModule } from './app-routing.module';
import { NoPageComponent } from './no-page/no-page.component';


import { BespraccodComponent } from './resources/bespraccod/bespraccod.component';
import { PaitusitComponent } from './resources/paitusit/paitusit.component';
import { FretusitComponent } from './resources/fretusit/fretusit.component';
import { ComcodsitComponent } from './resources/comcodsit/comcodsit.component';
import { ResDetailResolve } from './resources/res-detail/res-detail.resolve.service';
import { FretusitService } from './resources/fretusit/fretusit.service';
import { ComcodService } from './resources/comcodsit/comcod.service';
import { PaitusitService } from './resources/paitusit/paitusit.service';
import { ResDetailComponent } from './resources/res-detail/res-detail.component';
import { HtcabComponent } from './resources/htcab/htcab.component';
import { ResStartComponent } from './resources/res-start/res-start.component';
import { ResourcesComponent } from './resources/resources.component';
import { HfsitComponent } from './resources/hfsit/hfsit.component';
import { HfsitService } from './resources/hfsit/hfsit.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    OurMotoComponent,
    SugtonsComponent,
    AboutComponent,
    NoPageComponent,

    ResourcesComponent,
    BespraccodComponent,
    PaitusitComponent,
    FretusitComponent,
    ComcodsitComponent,
    ResDetailComponent,
    HtcabComponent,
    ResStartComponent,
    HfsitComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-guidals'}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ResnmService,
              FretusitService,
              ResDetailResolve,
              ComcodService,
              PaitusitService,
              HfsitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

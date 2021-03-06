import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ParticlesModule} from 'angular-particle';
//import { FontAwesomeModule } from '@fortawesome/fontawesome-free';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent
  ],
  exports:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    //FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent} from './home/home.component';
import { PortfolioComponent} from './portfolio/portfolio.component';
import { ServicesComponent} from './services/services.component';
import { AboutComponent} from './about/about.component';

const appRoutes :Routes = [
  {
    path :'home',
    component : HomeComponent
  },
  {
    path :'portfolio',
    component : PortfolioComponent
  },
  {
    path :'services',
    component : ServicesComponent
  },
  {
    path :'about',
    component : AboutComponent
  },
  {
    path :'contact',
    component : ContactComponent
  },
  {
    path: '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  //{path:'**', component : 404Component}
]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }

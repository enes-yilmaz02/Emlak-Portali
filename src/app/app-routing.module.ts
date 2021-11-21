import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { AgentyComponent } from './components/agenty/agenty.component';
import { PropertyComponent } from './components/property/property.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LogRegisterComponent } from './components/log-register/log-register.component';

const routes: Routes = [
  {
   path:'',
   component:LogRegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'agenty',
    component:AgentyComponent
  },
  {
    path:'property',
    component:PropertyComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'profil',
    component:ProfilComponent
  },
  

  { path: 'cards',
   loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

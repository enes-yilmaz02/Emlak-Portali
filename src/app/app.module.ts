import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PropertyComponent } from './components/property/property.component';
import { AgentyComponent } from './components/agenty/agenty.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LogRegisterComponent } from './components/log-register/log-register.component';
import { LoginComponent } from './components/log-register/login/login.component';
import { RegisterComponent } from './components/log-register/register/register.component';
import { AdminComponent } from './components/log-register/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResimComponent } from './components/resim/resim.component';
import { AboutCardsComponent } from './components/about/about-cards/about-cards.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { FakeusersComponent } from './components/home/fakeusers/fakeusers.component';
import { UsersComponent } from './components/home/users/users.component';
import { PropertyCardsComponent } from './components/property/property-cards/property-cards.component';
import { MainUpdateComponent } from './components/profil/main-update/main-update.component';
import { AgentyUsersComponent } from './components/agenty/agenty-users/agenty-users.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PropertyComponent,
    AgentyComponent,
    ContactComponent,
    ProfilComponent,
    LogRegisterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    FooterComponent,
    ResimComponent,
    AboutCardsComponent,
    CardsComponent,
    FakeusersComponent,
    UsersComponent,
    PropertyCardsComponent,
    MainUpdateComponent,
    AgentyUsersComponent,
    ContactFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule
   
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'https://demo.limantech.com/cards/p ublic/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

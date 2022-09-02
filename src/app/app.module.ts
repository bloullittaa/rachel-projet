import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ROUTES } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { AboutComponent } from './components/about/about.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';
import { MassagesComponent } from './components/massages/massages.component';
import { YogaComponent } from './components/yoga/yoga.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

// import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    FooterComponent,
    ContainerComponent,
    AsideLeftComponent,
    AboutComponent,
    TarifsComponent,
    MassagesComponent,
    YogaComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,


  ],
  exports: [],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


import { YogaComponent } from './components/yoga/yoga.component';
import { MassagesComponent } from './components/massages/massages.component';
import { ContainerComponent } from './components/container/container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AppModule } from './app.module';
import { AboutComponent } from './components/about/about.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';
import { ContactComponent } from './components/contact/contact.component';



export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Main', component: MainComponent, pathMatch: 'full' },
  { path: 'header', component: HeaderComponent, pathMatch: 'full' },
  { path: 'footer', component: FooterComponent, pathMatch: 'full' },
  { path: 'containers', component: ContainerComponent, pathMatch: 'full' },
  { path: 'aside', component: AsideComponent, pathMatch: 'full' },
  { path: 'aside-left', component: AsideLeftComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent, pathMatch: 'full' },
  {path: 'tarifs', component: TarifsComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  { path: 'massages', component: MassagesComponent, pathMatch: 'full'},
  {path: 'yoga', component: YogaComponent, pathMatch: 'full'},
  // { path: 'login', component: LoginComponent, pathMatch: 'full' },
  // { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];



    @NgModule({
    declarations: [],
    imports: [
    CommonModule,
    ]
})
export class AppRoutingModule { }

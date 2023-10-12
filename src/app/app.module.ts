import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavComponent } from './components/fav/fav.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarService } from './services/navbar.service';
import { RecommendComponent } from './components/recommend/recommend.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoGifComponent } from './components/logo-gif/logo-gif.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    NavbarComponent,
    DashboardComponent,
    FavComponent,
    RecommendComponent,
    FooterComponent,
    LogoGifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MatExpansionModule

  ],
  providers: [ NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { FavComponent } from './components/fav/fav.component';
import { RecommendComponent } from './components/recommend/recommend.component';
import { LogoGifComponent } from './components/logo-gif/logo-gif.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [ { path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
{ path: 'logo', component: LogoGifComponent },
// { path: '', redirectTo: 'login', pathMatch: 'full' }
{ path: '', redirectTo: 'logo', pathMatch: 'full' }
,
{ path: 'favorite', component: FavComponent },
{ path: 'recommend', component: RecommendComponent },
// { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

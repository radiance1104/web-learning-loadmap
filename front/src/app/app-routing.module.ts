import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NewsfeedsComponent } from './components/newsfeeds/newsfeeds.component';

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'newsfeeds', component: NewsfeedsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

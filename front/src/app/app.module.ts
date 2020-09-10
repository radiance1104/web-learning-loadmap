import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NewsfeedsComponent } from './components/newsfeeds/newsfeeds.component';
import { DateToStringPipe } from './pipes/date-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NewsfeedsComponent,
    DateToStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

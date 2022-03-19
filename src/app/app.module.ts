import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/smarts/dashboard/dashboard.component';
import { UsersCardComponent } from './components/dummies/users-card/users-card.component';
import { NavbarComponent } from './components/dummies/navbar/navbar.component';
import { GravatarDirective } from './util/directives/gravatar.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersCardComponent,
    NavbarComponent,
    GravatarDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

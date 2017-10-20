import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing }       from './app.routing';
import { HomeComponent }   from './home/home.component';
import { LoginComponent }   from './login/login.component';
import { AboutComponent }   from './about/about.component';
import { NavigationComponent } from './navigation.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
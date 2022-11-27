import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CinemaComponent } from './page/cinema/cinema.component';
import { NavComponent } from './common/nav/nav.component';
import { EditorComponent } from './page/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CinemaComponent,
    NavComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

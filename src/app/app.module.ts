import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { HomeComponent } from './home/home.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms' 
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DiagramsComponent,
    HomeComponent,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

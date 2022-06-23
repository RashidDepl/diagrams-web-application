import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { HomeComponent } from './home/home.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms' 
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DiagramsComponent,
    HomeComponent,
    DarkModeComponent,
    DialogComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

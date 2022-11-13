import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

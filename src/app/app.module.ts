import { BrowserModule ,HammerModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgenciesComponent } from './sections/agencies/agencies.component';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AgencyEditComponent } from './sections/agencies/agency-edit/agency-edit.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AgencyEditContainerComponent } from './sections/agencies/agency-edit/agency-edit.container';



@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    AgencyEditComponent,
    AgencyEditContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

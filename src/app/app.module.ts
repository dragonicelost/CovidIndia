import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidIndiaComponent } from './covid-india/covid-india.component';
import { CovidServiceService } from './covid-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CovidIndiaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CovidServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

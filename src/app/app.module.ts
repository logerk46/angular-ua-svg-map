import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UaMapModule } from './ukraine-map/ukraine-map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UaMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

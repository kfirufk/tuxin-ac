import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TuxinAcAnimatedImagesComponent} from 'tuxin-ac-animated-images';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TuxinAcAnimatedImagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

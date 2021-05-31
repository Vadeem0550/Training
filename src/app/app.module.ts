import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PurpleComponent } from './block-color/purple/purple.component';
import { OrangeComponent } from './block-color/orange/orange.component';
import { SapphirComponent } from './block-color/sapphir/sapphir.component';
import { RedComponent } from './block-color/red/red.component';
import { DarkComponent } from './block-color/dark/dark.component';
import {GreenComponent} from './block-color/green/green.component';
import {BrownComponent} from './block-color/brown/brown.component';
import {BlueComponent} from './block-color/blue/blue.component';

@NgModule({
  declarations: [
    AppComponent,
    PurpleComponent,
    OrangeComponent,
    SapphirComponent,
    RedComponent,
    DarkComponent,
    GreenComponent,
    BrownComponent,
    BlueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

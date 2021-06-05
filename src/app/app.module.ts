import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { PurpleComponent } from './block-color/purple/purple.component';
import { RoseComponent } from './block-color/rose/rose.component';
import { BlueComponent } from './block-color/blue/blue.component';
import { IndigoComponent } from './block-color/indigo/indigo.component';
import { SunnyComponent } from './block-color/sunny/sunny.component';
import { MintComponent } from './block-color/mint/mint.component';
import { SkyComponent } from './block-color/sky/sky.component';
import { RedComponent } from './block-color/red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    PurpleComponent,
    RoseComponent,
    BlueComponent,
    IndigoComponent,
    SunnyComponent,
    MintComponent,
    SkyComponent,
    RedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

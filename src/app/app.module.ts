import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GreenComponent } from './test/green/green.component';
import { YellowComponent } from './test/yellow/yellow.component';
import { BrownComponent } from './test/brown/brown.component';
import { BlueComponent } from './test/blue/blue.component';
import { PurpleComponent } from './test/purple/purple.component';
import { SandybrownComponent } from './test/sandybrown/sandybrown.component';
import { GreyComponent } from './test/grey/grey.component';
import { LilacComponent } from './test/lilac/lilac.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GreenComponent,
    YellowComponent,
    BrownComponent,
    BlueComponent,
    PurpleComponent,
    SandybrownComponent,
    GreyComponent,
    LilacComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaviganbarComponent } from './naviganbar/naviganbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviganbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

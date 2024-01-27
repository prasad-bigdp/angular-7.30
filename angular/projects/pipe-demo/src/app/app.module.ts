import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrasadPipe } from './prasad.pipe';
import { EvenOddPipe } from './even-odd.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrasadPipe,
    EvenOddPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

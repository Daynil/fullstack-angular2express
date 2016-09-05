import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/** Root component */
import { AppComponent }   from './app.component';

/** Components */
import { CheshireCatComponent } from './cheshire-cat/cheshire-cat.component';

/** App-wide Services */

/** Pipes */


@NgModule({
  imports: [
    BrowserModule, HttpModule
  ],
  declarations: [
    AppComponent, CheshireCatComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
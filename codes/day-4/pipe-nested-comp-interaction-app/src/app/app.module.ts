import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './filter/child.component';
import { UppercaseConverterPipe } from './pipes/uppercase-converter.pipe';

@NgModule({
  declarations: [
    AppComponent, UppercaseConverterPipe, ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

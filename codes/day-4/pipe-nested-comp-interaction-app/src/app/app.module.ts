import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ChildComponent } from './filter/child.component';
import { UppercaseConverterPipe } from './pipes/uppercase-converter.pipe';

@NgModule({
  declarations: [
    AppComponent, UppercaseConverterPipe, ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

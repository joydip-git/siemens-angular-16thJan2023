import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './calcualtor/calculator.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';

@NgModule({
  declarations: [
    AppComponent, CalculatorComponent, NewCalculatorComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

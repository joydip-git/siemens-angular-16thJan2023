import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AnotherComponent } from "./another.component";
import { AppComponent } from "./app.component";

@NgModule({
    //register components, directives and pipes
    declarations: [AppComponent, AnotherComponent],
    //register services
    providers: [],
    //register modules
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('App module created')
    }
}
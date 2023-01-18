import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message = 'Welcome to Angular'
    toolTip = 'Enter New Message in Text Box'
    width = 400
    constructor() {
        console.log('App component created')
    }
    changeMessage(newMessage: string) {
        this.message = newMessage
    }
}
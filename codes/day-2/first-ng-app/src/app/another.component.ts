import { Component } from "@angular/core";

@Component({
    selector: 'app-another',
    template: '<h2>another</h2>'
})
export class AnotherComponent {
    constructor() {
        console.log('Another created')
    }
}
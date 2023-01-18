import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})

export class CalculatorComponent {

    first: string = '';
    second: string = '';
    result: number = 0;
    constructor() {

    }
    add() {
        this.result = Number(this.first) + Number(this.second)
    }
}
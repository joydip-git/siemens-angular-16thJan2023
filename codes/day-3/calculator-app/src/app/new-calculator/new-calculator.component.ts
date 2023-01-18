import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-new-calculator',
    templateUrl: './new-calculator.component.html'
})

export class NewCalculatorComponent {
    calcForm: FormGroup;
    constructor() {
        this.calcForm = new FormGroup({
            first: new FormControl(0),
            second: new FormControl(0),
            result: new FormControl(0)
        })
        console.log(this.calcForm)
    }
    get first() {
        return this.calcForm.controls['first']
    }
    get second() {
        return this.calcForm.controls['second']
    }
    get result() {
        // return this.calcForm.controls['result']
        return this.calcForm.get('result')
    }
    add() {
        //console.log(this.calcForm.value)
        this.result?.setValue(Number(this.first?.value) + Number(this.second?.value))
    }
}
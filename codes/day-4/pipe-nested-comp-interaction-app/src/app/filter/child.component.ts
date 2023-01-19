import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: './child.component.html'
})

export class ChildComponent implements OnInit, OnChanges {
    @Input() rating: number = 0
    divWidth: number;
    constructor() {
        this.divWidth = this.rating * 14.7
        console.log(this.divWidth)
    }
    ngOnInit(): void {
        //this.divWidth = this.rating * 14.7
        console.log('init')
    }
    ngOnChanges(): void {
        this.divWidth = this.rating * 14.7
        console.log('changes')
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercaseconverter'
})
export class UppercaseConverterPipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        return value && value !== null && value !== '' ? value.toLocaleUpperCase() : value
    }
}
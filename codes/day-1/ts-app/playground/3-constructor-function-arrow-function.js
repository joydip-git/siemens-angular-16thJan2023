//1. object litreal syntax
/*
var anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        //templated string (string interpolation)
        return `name:${this.name},id:${this.id},salary:${this.salary}`
    }
}
*/
//2. constructor function
'use strict'
function person(name, id, salary) {
    let x = 100
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.print = function () {
        console.log('in print fn')
        //templated string (string interpolation)
        return `name:${this.personName},id:${this.personId},salary:${this.personSalary}`
    }
}
var anilObject = new person('anil', 1, 1000)
var sunilObject = new person('sunil', 2, 2000)
//anilObject.print()

var anilPrintRef = anilObject.print.bind(anilObject)
anilObject.print = function () { return 'hello' }
var sunilPrintRef = sunilObject.print.bind(sunilObject)
console.log(anilPrintRef())
console.log(sunilPrintRef())
// person('anil', 1, 1000)
// person('sunil', 2, 2000)
// console.log(window)

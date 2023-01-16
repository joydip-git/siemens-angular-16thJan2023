//number, string, boolean, object
//NaN, undefined, Infinity, NULL

var num = 100
var bool = false
var str = 'Joydip'
var obj = {
    //value properties
    name: 'Joydip',
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(typeof num)
console.log(typeof str)
console.log(typeof bool)
console.log(typeof obj)
console.log('welcome to JS')


num = 'Siemens'
//var res = num.toExponential(2)
//console.log(res)

function add(a, b) {
    return a + b
}

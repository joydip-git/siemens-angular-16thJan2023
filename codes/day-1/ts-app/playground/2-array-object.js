//var numbers = [1, 2, 3, 4, 5]
var numbers = new Array(1, 2, 3, 4)

var obj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
// console.log(obj.name)
// console.log(obj['salary'])

for (let propName in obj) {
    let propValue = obj[propName]
    console.log(propName + ':' + propValue)
}
var arrObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}
console.log('\n\n\n')
for (let propName in arrObj) {
    let propValue = arrObj[propName]
    console.log(propName + ':' + propValue)
}

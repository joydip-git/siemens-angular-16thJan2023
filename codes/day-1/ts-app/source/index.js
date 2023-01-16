//const numbers = [1, 3, 2, 5, 6, 4, 8, 7, 0, 9]
class Person {
    constructor(name, id, salary) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    print() {
        return `name:${this.personName},id:${this.personId},salary:${this.personSalary}`
    }
}
class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subjectName = subject
    }
    print() {
        return `${super.print()}, subject:${this.subjectName}`
    }
}

const anilObject = new Person('anil', 1, 1000)
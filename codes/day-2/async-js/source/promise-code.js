const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity)
                rejectFn(new Error('can not divide by zero'))
            else
                resolveFn(res)
        }
    )
    return p
}
const add = (a, b) => a + b

const divPromise = divide(10, 2)
divPromise
    .then(
        (data) => { console.log(data) },
        (err) => { console.log(err.message) }
    )


const addRes = add(10, 20)
console.log(addRes)
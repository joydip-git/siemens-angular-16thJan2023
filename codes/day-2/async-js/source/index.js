const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity)
        throw new Error('can not divide by zero')
    else
        return res
}
const add = (a, b) => a + b

async function call() {
    try {
        const divRes = await divide(10, 2)
        console.log(divRes)
    } catch (err) {
        console.log(err.message)
    }
}
call()
// const divPromise = divide(10, 2)
// divPromise
//     .then(
//         (data) => { console.log(data) },
//         (err) => { console.log(err.message) }
//     )


const addRes = add(10, 20)
console.log(addRes)
const divide = (a, b, callback) => {

    setTimeout(
        () => {
            const res = a / b
            if (res === Infinity)
                callback(new Error('can not divide by zero'), undefined)
            else
                callback(undefined, res)
        },
        2000
    )


}
const add = (a, b) => a + b

divide(10, 0, function (err, data) {
    if (err)
        console.log(err.message)
    if (data)
        console.log(data)
})


const addRes = add(10, 20)
console.log(addRes)
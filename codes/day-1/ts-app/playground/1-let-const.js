function test() {
    //console.log(x) //undefined
    let x = 100
    console.log(x) //100
    for (let i = 0; i < 1; i++) {
        let x = 'sjhasgjsag'
        console.log(x) //sjhasgjsag
    }
    console.log(x) //sjhasgjsag
    const y = 200
    y = 245
}
test()

/*
function testAgain() {
    console.log(x) //undefined
    var x = 100
    console.log(x) //100
    for (var i = 0; i < 1; i++) {
        var x = 300
        console.log(x) //300
    }
    console.log(x) //100
}

*/
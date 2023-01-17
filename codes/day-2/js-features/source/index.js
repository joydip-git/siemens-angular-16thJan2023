/*
var a = 200

function outer() {
    var x = 100

    function inner() {
        var z = 300
        var res = a + x + z
        console.log(res)
    }

    return inner
}

var innerFnRef = outer()
innerFnRef()

function resize(choice, width) {
    var resizeCtrlFn;
    switch (choice) {
        case 1:
            resizeCtrlFn = function () {
                var txtBox = document.getElementById('txtValue')
                txtBox.setAttribute('style', `width:${width}px`)
            }
            break;

        case 2:
            resizeCtrlFn = function () {
                var btn = document.getElementById('btnClick')
                btn.setAttribute('style', `width:${width}px`)
            }
            break;

        default:
            break;
    }
    return resizeCtrlFn
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        this.document
            .getElementById('btnResize')
            .addEventListener('click',
                function () {

                    if (document
                        .getElementById('radioResizeText')
                        .checked) {
                        var resizeCallback = resize(1, 300)
                        resizeCallback()
                    }
                    if (document
                        .getElementById('radioResizeButton')
                        .checked) {
                        var resizeCallback = resize(2, 400)
                        resizeCallback()
                    }
                }
            )
    }
)
*/
function outer() {
    this.x = 100
    // var ref = this
    // function inner() {
    //     this.y = 300
    //     var res = ref.x + this.y
    //     console.log(res)
    // }
    // inner()
    // function inner() {
    //     this.y = 300
    //     var res = this.x + this.y
    //     console.log(res)
    // }
    // var a = inner.bind(this)
    // a()

    const inner = () => {
        this.y = 300
        var res = this.x + this.y
        console.log(res)
    }
    inner()
}

new outer()
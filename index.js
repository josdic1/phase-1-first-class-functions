function receivesAFunction(cb) {
    cb()
}    

function returnsANamedFunction() {
    return function fn() {
        console.log('ok')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('ok')
    }
}


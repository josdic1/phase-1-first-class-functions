function receivesAFunction(myFunc) {
   myFunc()
}

function returnsANamedFunction() {
   function namedFunction() {
      console.log('I am a named function')
   }
   return namedFunction
}


function returnsAnAnonymousFunction(color) {
   return function () {
      console.log('The color is: ', color)
   }
}

const fn = returnsAnAnonymousFunction('red')
fn()
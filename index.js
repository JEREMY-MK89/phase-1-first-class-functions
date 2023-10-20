
//The function receiveFunction give another function spy as its argument
//cosnt spy = chai.spy henec we call back cahai.spy as the callback
function receivesAFunction(spy){
    spy();
}

receivesAFunction(function(){
    console.log('chai.spy()')
});


function returnsANamedFunction(){
    return function(){
     console.log('named')
    }
}
var fn = returnsANamedFunction();



function returnsAnAnonymousFunction(){
    return function(){
     console.log('')
    }
}
const fn = returnsAnAnonymousFunction();

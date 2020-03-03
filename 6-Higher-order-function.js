function createFunction(multiplier){
    return function(x){
        return x * multiplier
    }
}
let double = createFunction(2)
let triple = createFunction(3)
let quadrople = createFunction(4)

console.log("The double of 5 is: "+double(5))
console.log("The triple of 5 is: "+triple(5))
console.log("The quadrople of 5 is: "+quadrople(5))

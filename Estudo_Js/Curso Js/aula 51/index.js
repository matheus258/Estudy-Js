function criaDivisor(divisor){
    return function(n){
        return n / divisor;
    }
}

const primeiroDiv = criaDivisor(2);

console.log(primeiroDiv(100))
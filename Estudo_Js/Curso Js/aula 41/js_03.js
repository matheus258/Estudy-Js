function di(num){
    if(typeof num !== 'number'){return num;}
    else if(num % 3 === 0 && num % 5 === 0){return 'FizzBuzz';}
    else if(num % 3 === 0){ return 'Fizz';}
    else if(num % 5 === 0){return 'Buzz';}
    else if(num % 3 !== 0 && num % 5 !== 0){return num;}
}
console.log(di(300))
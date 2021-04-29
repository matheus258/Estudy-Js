let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

vara = String(varB); // B
varB = String(varC); // C
varC = String(varA); // A

console.log(vara,varB, varC);

[varA, varB, varC] = [0,1,2];

console.log(varA,varB, varC);
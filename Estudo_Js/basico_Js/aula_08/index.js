/*
Matheus Marques tem 22 anos, pesa 72 kg 
tem 1.7 de altura e seu IMC é de 25.925925925925925
Matheus nasceu em 1998
*/
const nome = "Matheus Marques";
const sobrenome = "Araújo";
const idade = 22;
const peso = 72;
const alturaEmMt = 1.70;
let IndecemassaCorporal; // peso / (altura * altura)
let anoNascimento;

IndecemassaCorporal = peso/(alturaEmMt*alturaEmMt);
anoNascimento =  2020 - idade;

console.log(nome,"tem "+idade+" anos, pesa "+peso+" kg");
console.log("tem "+alturaEmMt+" de altura e o seu IMC é de "+IndecemassaCorporal);
console.log(nome+" Nasceu em "+anoNascimento);
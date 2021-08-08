/*Matheus Marques de Araujo tem 22 anos, 
pesa 70 kg tem 1.73 de altura e seu IMC é de  23.38868655818771
*/

const nome = 'Matheus Marques';
const sobreNome = 'de Araujo';
const idade = 22;
const altura = 1.73;
const peso = 70;
let imc; // peso / (alt * alt)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2021 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg,` );
console.log(`tem ${altura} de altura, e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

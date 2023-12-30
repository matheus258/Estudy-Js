// AND ou && as duas condições tem que ser True para rodar.
const num = 10;

if (num < 50 && num > 5) {
  console.log(
    "Esse teste foi aceito, pois num é igual a 10: Sendo assim é menor que 50 e maior que 5."
  );
}
if (num == 50 && num > 5) {
  console.log("O número é igual a 50 e maior que 5");
}
if (num !== String && num == 5 + 5) {
  console.log("Teste 3 Foi aceito, pois num = a Number e num == a 5 + 5");
}

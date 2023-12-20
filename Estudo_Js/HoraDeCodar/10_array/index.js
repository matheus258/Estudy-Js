// ARRAY
var array = ["pedra", "papel", "tesoura"];
var i = 0;

// Verificar se tem todos os itens do array selecioandos
for (obj of array) {
  if (obj == "pedra" || obj == "papel" || obj == "tesoura") {
    i++;
    console.log(i);
    console.log(obj);
  }
  if (i == 3) {
    console.log("############");
    console.log("TODOS ITENS COLETADOS");
  }
}

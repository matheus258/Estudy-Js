// ESCOPO JS
//-------------------------------------------------------------
var escopo = {};
escopo.valorGlobal = 10;
function funcaoEscopo() {
  var valorLocal = 5;
  console.log("Valor Global: ", escopo.valorGlobal);
  console.log("Valor Local: ", valorLocal);
}
funcaoEscopo();

let frutas = ["Laranja", "Perâ", "Uva", "Maçâ", "Jaca"];

var listaUl = document.createElement("ul");

let body = document.getElementsByTagName("body");
body[0].appendChild(listaUl); //adiciona a tag ul no html

var listaNoBody = document.getElementsByTagName("ul");
for (i = 0; i < frutas.length; i++) {
  var li = document.createElement("li");
  var txt = document.createTextNode(frutas[i]);
  li.appendChild(txt);
  listaNoBody[0].appendChild(li);
}
//função para adicionar uma fruta na lista

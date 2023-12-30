const array = [
  "Karen colocou atestado por estar doente!",
  "Mentira, foi beber cana!",
  "Tem que ser demitida",
];

let indice = 0;

function imprimirProximaMensagem() {
  if (indice < array.length) {
    console.log(array[indice]);
    indice++;
  } else {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(imprimirProximaMensagem, 1500);

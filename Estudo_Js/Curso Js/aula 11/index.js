// alert

window.alert("Hello world");

//Confirm

let areaTeste = window.confirm("Você está na página teste!, deseja continuar?");

if (areaTeste == true) {
    window.alert("Ok! Você será direcionado para á pagina!");
}
else if (areaTeste == false) {
    window.alert("Volte sempre!");
}    

//Prompt

window.prompt("Digite seu nome: ");

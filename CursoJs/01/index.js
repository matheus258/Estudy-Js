function mudar_h1(){
    var texto = document.getElementsByTagName('h1');
    texto[0].style.color = 'red';
    texto[0].innerText = 'Olá'
}

function incrementar(){
    var numero = document.getElementById('p2');
    numero.innerText = parseInt(numero.innerText) + 2;
}
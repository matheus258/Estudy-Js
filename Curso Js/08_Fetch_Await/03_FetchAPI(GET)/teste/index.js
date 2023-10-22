fetch('/pessoas.json')
    .then(res => res.json())
    .then(data => teste(data))

function teste(data){
    const h2 = document.createElement('h2');

    for(let pessoa of data){

        let span = document.createElement('span')
        span.innerHTML = pessoa.nome;

        h2.appendChild(span)

    }
    let resultado = document.querySelector('.resultado')
    resultado.appendChild(h2)
}
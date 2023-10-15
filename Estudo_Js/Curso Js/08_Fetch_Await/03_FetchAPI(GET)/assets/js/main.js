// Obtem dados do arquivo json
fetch('pessoas.json')
  .then((response) => response.json())
  .then(json => carregaElementos(json))

// Carrega nome de todas pessoas da lista
function carregaElementos(json){
  const table = document.createElement('table')

  for(let pessoa of json){
    let tr = document.createElement('tr');

    // Nome
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td)

    // Idade
    td = document.createElement('td')
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    // Salario
    td = document.createElement('td')
    td.innerHTML  = `R$${pessoa.salario}`;
    tr.appendChild(td)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}
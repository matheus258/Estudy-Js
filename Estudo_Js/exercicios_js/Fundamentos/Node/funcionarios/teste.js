const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
 
axios.get(url).then(response => {
  const funcionarios = response.data
  
  const novoArray = funcionarios.filter((elemento) => {
    return elemento.pais === "China" && elemento.genero === "F"
  })
 
  novoArray.sort(function(primeiroFuncionario, segundoFuncionario) {
   return primeiroFuncionario.salario - segundoFuncionario.salario;
 
});
 
console.log(novoArray[0])
})
 
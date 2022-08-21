const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data 

    const funcionariosFilter = funcionarios.filter(function(e) {
        return e.genero === 'F' && e.pais === 'Russia'
    })

    funcionariosFilter.sort(function(salarioMenor, salarioMaior) {
        return salarioMenor.salario + salarioMaior.salario;
    })
    console.log(funcionariosFilter[0])
})
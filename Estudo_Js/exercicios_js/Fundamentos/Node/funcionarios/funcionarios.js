const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data

    const filtroFuncionarios = funcionarios.filter((e) => {
        return e.pais === "Brazil" && e.genero === "F"
    })

    filtroFuncionarios.sort(function(primeiroSalario, segundoSalario) {
        return primeiroSalario.salario - segundoSalario.salario;
    })

    console.log(filtroFuncionarios[0])
})
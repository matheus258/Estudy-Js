exports.paginaInicial = (req, res) => {
    res.send(`
        <form action='/' method='POST'>
            Nome do cliente: <input type='text' name='nome'><br>
            Outro Campo: <input type='text' name='outrocampo'>
            <button>Enviar</button>
        </form>
    `)
}

exports.trataPost = (req, res) => {
    // let nome = req.body; // pega o valor do input name="nome"
    // console.log(nome);
    // if(!nome){
    //         return res.status(400).json({erros: ['Não enviou um nome']
    //     })
    // }
    res.send(`Ei sou sua rota de Post <br>`)

}
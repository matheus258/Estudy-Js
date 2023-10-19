exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    let nome = req.body.nome; // pega o valor do input name="nome"
    console.log(nome);
    if(!nome){
            return res.status(400).json({erros: ['Não enviou um nome']
        })
    }
    res.send(`Ei sou sua rota de Post <br>Nome: ${nome}`)

}
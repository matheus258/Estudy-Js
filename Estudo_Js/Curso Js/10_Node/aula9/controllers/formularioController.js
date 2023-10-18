exports.formulario = (req, res) => {
    res.send(`
        <html>
        <body>
        <h1>Exemplo de Formulário</h1>
        <form method="POST" action="/formularioo">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome">
            <br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email">
            <br>
            <input type="submit" value="Enviar">
        </form>
        </body>
        </html>
    `)
}

exports.trataFormulario = (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    res.send(`Nome: ${nome} <br>Email: ${email}`)
}
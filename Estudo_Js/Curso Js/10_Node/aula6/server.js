const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello <b>World!</b>')
});
app.get('/contato', (req,res) => {
    res.send(`
        <h1>Form</h1>
        <form action="/" method="POST">
        <input type="text" name="nome"/><br/>
        <textarea name="mensagem"></textarea><br/>
        <button type="submit">Enviar</button>
        </form>

    `);
})

app.post('/', (req, res) => {
    res.send('Enviado com Sucesso')
})

// Porta do Servidor
app.listen(3000, ()=>{
    console.log('Servidor Rodando na PORT 3000');
    console.log('Para encerrar CTRL + C')
});
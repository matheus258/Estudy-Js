const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
    console.log('PARA FINALIZAR SERVIDOR: CTRL + C')
})
const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('<p>Hello html criado para Teste com <strong>NODEMON</strong></p> <br> <h2>Esse teste é para config de package e express.</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Acessar: http://localhost:3000/`);
    console.log('Para sair do servidor: CTRL + C')
})
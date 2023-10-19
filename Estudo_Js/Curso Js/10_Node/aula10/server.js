const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Configurar o middleware para analisar dados do formulário
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views')) // ('views', './src/views') <== outra opcao da mesma rota.
app.set('view engine', 'ejs')

const route = require('./routes')

app.use(route)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    console.log(`http://localhost:3000/`)
})
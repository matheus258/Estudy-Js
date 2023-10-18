// const express = require('express');
// const app = express()
// const port = 3000;

// app.get('/', (req,res) => {
//     res.send({message: 'Hello World!'})
// })

// app.listen(port, ()=>{
//     console.log(`Acessar: http://localhost:3000/`);
//     console.log('Para sair do servidor: CTRL + C')
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require("express"); //importando o express - lib para permitir criar servidor com o node
const router = express.Router() //importando a funcionalidade  de rota
const nomes = require('./dados.json') // importando os dados do arquivo nomes
const cors = require('cors') // importando o cors - lib para permitir que front end consuma nossa api

const app = express()//criar uma instancia do express
app.use(express.json()) //permitindo tráfego json
app.use(cors()) //criando a instancia de cors

const ola = router.get('/ola', (req, res) => { //rota de olá mundo
    res.send('Olá Aprofunda pretalab!')
})

// Quero criar uma rota para enviar os dados das alunas como resposta da requisiçao 
const alunas = router.get('/nomes', (req, res) => {
    res.json(nomes)
})


app.use(ola) //usando a rota
app.use(alunas)
app.listen(3333, console.log('Servidor rodando com sucesso')) //enviando em qual porta o servidorr pode rodar 


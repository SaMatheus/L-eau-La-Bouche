const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// CONFIGURANDO A TEMPLATE ENGINE
server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

// CONFIGURANDO O ESTILO DA PÁGINA NO SERVIDOR
server.use(express.static('public'))

// ADICIONANDO ROTA 
server.get('/', (req, res) => {
  return res.render('home')
})

server.get('/sobre', (req, res) => {
  return res.render('sobre')
})

server.get('/carne-vermelha', (req, res) => {
  return res.render('carne-vermelha')
})

server.get('/frutos-do-mar', (req, res) => {
  return res.render('frutos-mar')
})

// DEFININDO O SERVIDOR COM A PORTA 5000
server.listen(5000, () => {
  console.log('Server is running')
})
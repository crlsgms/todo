//import a dependencia body-parser, express e cria o servidor do express
const bodyParser = require('body-parser')
const express = require('express')
const servidor = express()

// configura o server com o parser
servidor.use(bodyParser.urlencoded({extended: true}))
servidor.use(bodyParser.json())

//sobe o servidor na 3003
servidor.listen(3003, function(){
    console.log('Server up ouvindo na 3003')
})
// importar as dependencias do express
const express = require('express')

//exportar uma função anônima que recebe o servidor como parâmetro

module.exports = function (servidor){
    // criando uma rota no express
    const router = express.Router()
    // a rota raiz é /api
    servidor.use('/api', router)

    //rota para o todo
    const partidaServico = require('../api/todo/partidaServico')
    // a rota completa para acessar a api sera /api/partidas
    // http://servidor:3003/api/partidas
    partidaServico.register(router, '/partidas')
}
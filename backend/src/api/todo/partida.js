// Esquema /estrutura do documento no banco de dados
// importar a dependencia do node-restful (APIs com o esquema)
const restful = require('node-restful')
// importar o mongoose do node-restful
const mongoose = restful.mongoose

// cria o esquema do documento no db
// inputs pra prova: Jogo (codigo, timeA, timeB, local, data) 
const partidaSchema = new mongoose.Schema(
    {
        partida: {type: String, required: true},
        timeA: {type: String, required: true},
        timeB: {type: String, required: true},
        local: {type: String, required: true},
        realizado: {type: Boolean, required: true, default: false},
        agendado: {type: Date, default: Date.now}
    }
)
//esporta o esquema 
module.exports = restful.model('Partida', partidaSchema)

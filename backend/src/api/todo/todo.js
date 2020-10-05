// Esquema /estrutura do documento no banco de dados
// importar a dependencia do node-restful (APIs com o esquema)
const restful = require('node-restful')
// importar o mongoose do node-restful
const mongoose = restful.mongoose

// cria o esquema do documento no db
// removido o quando: {type: String, required: true}, 
const todoSchema = new mongoose.Schema(
    {
        descricao: {type: String, required: true},
        quem: {type: String, required: true},
        onde: {type: String, required: true},
        prioridade: {type: Number, required: true},
        feita: {type: Boolean, required: true, default: false},
        criacao: {type: Date, default: Date.now}
    }
)
//esporta o esquema 
module.exports = restful.model('Todo', todoSchema)

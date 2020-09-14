//importação das dependências do mongoose
const mongoose = require('mongoose')
//configurações do banco, on promisse (promessa de ter retorno do DB)
mongoose.Promise = global.Promise
//coneta no banco todo hospedado localmente
module.exports = mongoose.connect('mongodb://localhost/todo',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
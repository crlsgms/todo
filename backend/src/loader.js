//carregando o webserver
const servidor = require('./config/server')
//require ('./config/server')
//carrega e conecta no servidor
require('./config/database')
//carrega as rotas e passa o servidor como parametro
require('./config/routes')(servidor)
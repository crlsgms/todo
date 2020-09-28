//exportar função anônima

module.exports = function(requisicao, resposta, sequencia){
    //configura a resposta ao cliente
    //permite o acesso as APIs de qualquer IP
    resposta.header("Access-Control-Allow-Origin", "*");
    // permite o acesso dos métodos GET, POST, PUT, DELETE
    resposta.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    // configura o cabeçalho da resposta
    resposta.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" )
}
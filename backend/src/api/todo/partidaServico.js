// importa o esquema
const Partida = require('./partida')

// informar os métodos REST vamos utilizar
Partida.methods(['get', 'post', 'put', 'delete'])
// ajustar opções de update
// new: true -> depois de atualizado, retorna a nova tarefa
// runValidators: true -> ao atualizar, os campos obrigatórios devem continuar
Partida.updateOptions({new: true, runValidators: true})

//exportar
module.exports = Partida
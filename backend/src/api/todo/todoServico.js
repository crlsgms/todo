// importa o esquema
const Todo = require('./todo')

// informar os métodos REST vamos utilizar
Todo.methods(['get', 'post', 'put', 'delete'])
// ajustar opções de update
// new: true -> depois de atualizado, retorna a nova tarefa
// runValidators: true -> ao atualizar, os campos obrigatórios devem continuar
Todo.updateOptions({new: true, runValidators: true})

//exportar
module.exports = Todo
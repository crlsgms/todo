import React,{Component} from 'react'
import PageHeader from './PageHeader'
import TodoForm from './TodoForm'

export default class Todo extends Component {
    render (){
        return(
            <div className="container">
                <PageHeader titulo='Tarefas' subtitulo='Cadastro'/>
                <h1> Lista de Tarefas </h1>
                <TodoForm/>
            </div> 
        )
    }
}

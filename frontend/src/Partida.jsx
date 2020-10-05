import React,{Component} from 'react'
import PageHeader from './PageHeader'
import PartidaForm from './PartidaForm'

export default class Partida extends Component {
    render (){
        return(
            <div className="container">
                <PageHeader titulo='Tarefas' subtitulo='Cadastro'/>
                <h1> Placar de Partidas </h1>
                <PartidaForm/>
            </div> 
        )
    }
}

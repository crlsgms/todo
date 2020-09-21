import React from 'react'
import {Component} from 'react'
import Menu from './Menu'

//criando classe de componente
export default class App extends Component{

    render(){
        return (
            <div className="container">
                {/* removido pra por o menu <h1> Nossa aplicação de Tarefas </h1> */}
                <Menu/>
            </div>
        )
    }
}
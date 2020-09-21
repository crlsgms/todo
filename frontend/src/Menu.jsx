import React, {Component} from 'react'

export default class Menu extends Component {

    render(){
        return (
            {/* barra de navegação */},
            <nav className="navbar navbar-inverse bg-inverse">
                <div className="container">
                    {/* cabeçalho da barra de navegação */}
                    <div className="navbar-header">
                        <a className="nav-bar-brand" href="/todo">
                            <i className="fa fa-calendar-check-o"> Todo App </i>
                        </a>
                    </div>
                    {/* opções do menu - com possibilidade de esconder em telas menores*/}
                    <div id="navbar" className="navbar-collapse collapse">
                        {/* lista de opções */}
                        <ul className="nav navbar-nav">
                            <li> <a href="/todo"> Tarefas </a> </li>
                            <li> <a href="/sobre"> Sobre </a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
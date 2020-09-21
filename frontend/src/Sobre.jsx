import React,{Component} from 'react'

import PageHeader from './PageHeader'
export default class Sobre extends Component {
    
    render (){
        return(
            <div className="container">
                <PageHeader titulo='Sobre' subtitulo='Nós'/>
                <h3> Este aplicativo foi desenvolvido pelos alunos do 6º ciclo do
                     curso de Análise e Desenvolvimento de Sistemas da Fatec Franca
                </h3>
            </div>
        )
    }
}

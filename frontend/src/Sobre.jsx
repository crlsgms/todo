import React, { Component } from 'react'

import PageHeader from './PageHeader'
export default class Sobre extends Component {

    render() {
        return (
            <div className="container">
                <PageHeader titulo='Sobre' subtitulo='Nós' />
                <h2> React App para avaliação de conteúdo ITE002 </h2>
                <h3>Fatec Franca 2020</h3>
                <h4>Prof. Daniel Pires</h4>
                <h4>Aluno - Carlos Gomes</h4>
                <h5><a href="https://github.com/crlsgms/todo/tree/exercicio-aula" target="_blank">Git Exercício Original</a></h5>
                <h5><a href="https://github.com/crlsgms/todo/tree/prova" target="new">Git Prova - Jogos</a></h5>  
            </div>
        )
    }
}

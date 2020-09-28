import React, { Component } from 'react'
import Axios from 'axios'

export default class TarefaForm extends Component {
    //construtor
    constructor() {
        super() // chama construtor da superclasse
        //inicializando as variaveis de classe
        this.state = {
            descricao: "",
            quem: "",
            onde: "",
            prioridade: 0,
            lista:[]
        }
        this.buscaTarefas() // atualiza a lista de tarefas
    }
    
    //busca a lista de tarefas utilizando api GET
    buscaTarefas(){
        Axios.get('http://localhost:3003/api/todos')
        .then(resposta => this.setState({lista: resposta.data}))
    }

    //método para popular as linhas da tabela de consulta nas tarefas
    //percorrendo a lista de tarefas usando a função map
    criaLinhasTabela(){
        return (
            this.state.lista.map( cadaTarefa => (
                <tr key={cadaTarefa._id}>
                    <td> {cadaTarefa.descricao} </td>
                    <td> {cadaTarefa.quem} </td>
                    <td> {cadaTarefa.onde} </td>
                    <td> {cadaTarefa.prioridade} </td>
                    <td> {(cadaTarefa.criacao.toLocaleString())} </td>
                </tr>
        ))
        )
    }
    
    //captura de valores
    setDescricao(e) {
        this.setState({ descricao: e.target.value })
    }
    setQuem(e) {
        this.setState({ quem: e.target.value })
    }
    setOnde(e) {
        this.setState({ onde: e.target.value })
    }
    setPrioridade(e) {
        this.setState({ prioridade: e.target.value })
    }

    cadastrar(){
        const novaTarefa = {
            descricao: this.state.descricao,
            quem: this.state.quem,
            onde: this.state.onde,
            prioridade: this.state.prioridade
        }
        //AXIOS: dependencia para consumir APIs em RESTFUL
        //consumindo o método post para inserir uma tarefa
        Axios.post('http://localhost:3003/api/todos', novaTarefa)
            .then(resposta => console.log(resposta.data))
            this.buscaTarefas() // atualiza a lista
    }

    render() {
        return (
            <div className="form"> {/* formulario do bootstrap */}
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="descricao"> Descrição </label>
                    <input className="form-control" type="text" value={this.state.descricao}
                        onChange={e => this.setDescricao(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="quem"> Quem </label>
                    <input className="form-control" type="text" value={this.state.quem}
                        onChange={e => this.setQuem(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="onde"> Onde </label>
                    <input className="form-control" type="text" value={this.state.onde}
                        onChange={e => this.setOnde(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="prioridade"> prioridade </label>
                    <input className="form-control" type="text" value={this.state.prioridade}
                        onChange={e => this.setPrioridade(e)}>
                    </input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="button" onClick={e => this.cadastrar()}> Cadastrar </button>
                </div>
                {/* exibir a lista de tarefas do banco */}
                <div className="container">
                    Lista de tarefas
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Descrição </th>
                                <th> Quem </th>
                                <th> Onde </th>
                                <th> Prioridade </th>
                                <th> Criada em </th>
                            </tr>
                        </thead>
                        <tbody> {/*cria uma linha para cada entrada do banco (tarefa)*/}
                            {this.criaLinhasTabela()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
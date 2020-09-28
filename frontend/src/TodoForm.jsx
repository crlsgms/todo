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
        }
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
            </div>
        )
    }
}
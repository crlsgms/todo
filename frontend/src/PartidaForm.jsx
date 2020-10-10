import React, { Component } from 'react'
import Axios from 'axios'
import Toggle from 'react-bootstrap-toggle'
//import { Bootstrap2Toggle } from 'react-bootstrap-toggle';

export default class PartidaForm extends Component {
    //construtor
    constructor() {
        super() // chama construtor da superclasse
        //inicializando as variaveis de classe
        this.state = {
            // toggleActive: false,
            partida: "",
            timeA: "",
            timeB: "",
            local: "",
            realizado: 0,
            agendado: "",
            lista: []
        }
        this.buscaPartidas() // atualiza a lista de tarefas
        this.onToggle = this.onToggle.bind(this);
        const agora = new Date();
    }

    onToggle(cadaPartida) {
        // this.setState({ toggleActive: !this.state.toggleActive })
        // console.log('cadaPartida: ', cadaPartida);
        // cadaPartida.realizado = !cadaPartida.realizado
        // if para inverter a flag de realizado do jogo-
        if (cadaPartida.realizado === true) {
            return this.marcaPendente(cadaPartida);
        }
        return this.marcaComoRealizada(cadaPartida);
    }

    //busca a lista de tarefas utilizando api GET
    buscaPartidas() {
        Axios.get('http://localhost:3003/api/partidas')
            .then(resposta => this.setState({ lista: resposta.data }))
        //atualiza o formulário
        //this.buscaPartidas()
        // console.log('this.state.lista', this.state.lista);
    }

    //método para popular as linhas da tabela de consulta nas tarefas
    //percorrendo a lista de tarefas usando a função map
    criaLinhasTabela() {
        return (
            this.state.lista.map(cadaPartida => (
                <tr key={cadaPartida._id}>
                    <td> {cadaPartida.partida} </td>
                    <td> {cadaPartida.timeA} </td>
                    <td> {cadaPartida.timeB} </td>
                    <td> {cadaPartida.local} </td>
                    {/* <td> {cadaPartida.realizado} </td> */}
                    <td><Toggle
                        onClick={e => this.onToggle(cadaPartida)}
                        on={<h4>Realizada</h4>}
                        off={<h4>Agendada</h4>}
                        size="xs"
                        offstyle="warning"
                        onstyle="success"
                        active={cadaPartida.realizado}
                    /></td>
                    <td> {cadaPartida.agendado} </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={e => this.remover(cadaPartida)}><span class="glyphicon glyphicon-trash"></span></button> </td>
                    {/* entradas de teste para trocar o hide / display por um botão de toggle
                    <td>
                        <button style={cadaPartida.realizado ? { display: "none" } : null} type="button" className="btn btn-success" onClick={e => this.marcaComoRealizada(cadaPartida)}> Realizada </button>

                        <button style={!cadaPartida.realizado ? { display: "none" } : null} type="button" className="btn btn-warning" onClick={e => this.marcaPendente(cadaPartida)}> Agendada </button>
                    </td> */}
                    {/* <td>
                        <input type="checkbox" data-toggle="toggle" data-onstyle="success" data-offstyle="danger"></input>
                    </td>
                    <td>
                        <input type="checkbox" data-on="Realizado" data-off="Programado" data-toggle="toggle" data-onstyle="success" data-offstyle="warning"></input>
                    </td>  */}
                </tr>
            ))
        )
    }

    //entradas crud
    cadastrar() {
        const novaPartida = {
            partida: this.state.partida,
            timeA: this.state.timeA,
            timeB: this.state.timeB,
            local: this.state.local,
            realizado: this.state.realizado,
            agendado: this.state.agendado,
        }
        //AXIOS: dependencia para consumir APIs em RESTFUL
        //consumindo o método post para inserir uma tarefa
        Axios.post('http://localhost:3003/api/partidas', novaPartida)
            .then(e => this.buscaPartidas())
        // .then(partida => console.log(this.agendado));
        //this.buscaPartidas() // era pra atualizar a lista mas não funciona :(
    }
    remover(partida) {
        const url = `http://localhost:3003/api/partidas/${partida._id}`
        console.log(url)
        Axios.delete(url)
            .then(e => this.buscaPartidas())
    }
    marcaComoRealizada(partida) {
        const url = `http://localhost:3003/api/partidas/${partida._id}`
        Axios.put(url, { ...partida, realizado: true })
            .then(e => this.buscaPartidas())
    }
    marcaPendente(partida) {
        const url = `http://localhost:3003/api/partidas/${partida._id}`
        Axios.put(url, { ...partida, realizado: false })
            .then(e => this.buscaPartidas())
    }

    //captura de valores
    //schema de referencia
    // {
    //     partida: {type: String, required: true},
    //     timeA: {type: String, required: true},
    //     timeB: {type: String, required: true},
    //     local: {type: String, required: true},
    //     realizado: {type: Boolean, required: true, default: false},
    //     agendado: {type: Date, default: Date.now}
    // }
    setPartida(e) {
        this.setState({ partida: e.target.value })
    }
    setTimeA(e) {
        this.setState({ timeA: e.target.value })
    }
    setTimeB(e) {
        this.setState({ timeB: e.target.value })
    }
    setLocal(e) {
        this.setState({ local: e.target.value })
    }
    setRealizado(e) {
        this.setState({ realizado: e.target.value })
    }
    setAgendado(e) {
        this.setState({ agendado: e.target.value })
    }

    render() {
        return (
            <div className="form"> {/* formulario do bootstrap */}
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="partida"> Partida </label>
                    <input className="form-control" type="text" value={this.state.partida}
                        onChange={e => this.setPartida(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="timeA"> Time A </label>
                    <input className="form-control" type="text" value={this.state.timeA}
                        onChange={e => this.setTimeA(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="timeB"> Time B </label>
                    <input className="form-control" type="text" value={this.state.timeB}
                        onChange={e => this.setTimeB(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="local"> Estádio </label>
                    <input className="form-control" type="text" value={this.state.local}
                        onChange={e => this.setLocal(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="realizado"> Situação </label>
                    <input className="form-control" type="text" value={this.state.realizado}
                        onChange={e => this.setRealizado(e)}>
                    </input>
                </div>
                <div className="form-group"> {/* grupo de dados (label e input)*/}
                    <label htmlFor="agendado"> Agenda </label>
                    <input className="form-control" type="date" value={this.state.agendado}
                        onChange={e => this.setAgendado(e)}>
                    </input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="button" onClick={e => this.cadastrar()}> Cadastrar </button>
                </div>
                {/* exibir a lista de tarefas do banco */}
                <div className="container">
                    Lista de Partidas
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Partida </th>
                                <th> Time A </th>
                                <th> Time B </th>
                                <th> Local </th>
                                <th> Situação </th>
                                <th> Data agendada </th>
                                <th> Excluir </th>
                            </tr>
                        </thead>
                        <tbody> {/*cria uma linha para cada entrada do banco (partida)*/}
                            {this.criaLinhasTabela()}
                        </tbody>
                    </table>
                </div>
                {/* <div>
                    <h2>teste date</h2>
                    var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

                    // toLocaleDateString() sem argumentos depende da implementação,
                    // o locale padrão, e o time zone padrão
                    console.log(date.toLocaleDateString());
                </div> */}
            </div>
        )
    }
}
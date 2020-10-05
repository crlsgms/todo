import React, {Component} from 'react'

//importar a dependência AXIOS
import axios from 'axios'

export default class TarefaForm extends Component{

    //construtor
    constructor(){
        super() //chama o construtor da superclasse
        //vamos inicializar as variáveis da classe
        this.state = {
            descricao: "",
            quem: "",
            onde: "",
            prioridade: 0,
            lista: []
        }
        this.buscaTarefas()//atualiza a lista de tarefas
            
    }

    //busca a lista de tarefas a partir da api get
        buscaTarefas(){
            axios.get('http://localhost:3003/api/todos')
            //altera a lista de tarefas com o conteúdo vindo do GET
            .then(resposta => this.setState({lista: resposta.data}))


        }
        
        remover(tarefa){
            const url = http://localhost:3003/api/todos/${tarefa._id}
            console.log (url)
            axios.delete(url)
            .then (e => this.buscaTarefas())
        }

        setDescricao(e){
            this.setState({descricao: e.target.value})
        }
        setQuem(e){
            this.setState({quem: e.target.value})
        }
        setOnde(e){
            this.setState({onde: e.target.value})
        }
        setPrioridade(e){
            this.setState({prioridade: e.target.value})
        }

        cadastrar(){
            const novaTarefa = {
                descricao: this.state.descricao,
                quem: this.state.quem,
                onde: this.state.onde,
                prioridade: this.state.prioridade
            }

            //AXIOS: dependência para consumir APIs em RESTFUL
            //vamos consumir o método POST para consumir uma tarefa
            axios.post('http://localhost:3003/api/todos', novaTarefa)
            .then(resposta =>console.log(resposta.data))

            //atualiza o formulário
            this.buscaTarefas()

        }

        marcaComoFeita(tarefa){

            const url = http://localhost:3003/api/todos/${tarefa._id}
            axios.put(url, {...tarefa, feita: true})
            .then( resp => this.buscaTarefas())

        }

        marcaComoDesfeita(tarefa){

            const url = http://localhost:3003/api/todos/${tarefa._id}
            axios.put(url, {...tarefa, feita: false})
            .then( resp => this.buscaTarefas())

        }

        

        criaLinhasTabela(){
            {/*vamos percorrer a lista - usaremos a função map para iterar na lista */}
            return(
                this.state.lista.map( cadaTarefa => (
                    <tr key={cadaTarefa._id}>
                        <td>{cadaTarefa.descricao}</td>
                        <td>{cadaTarefa.quem}</td>
                        <td>{cadaTarefa.onde}</td>
                        <td>{cadaTarefa.prioridade}</td>
                        <td>{cadaTarefa.criacao}</td>
                        <td>
                        <td> 
                        <button type="button" className="btn btn-danger" onClick={e => this.remover(cadaTarefa)}> 
                            Remove 
                        </button>
                        <button  style={cadaTarefa.feita ? {display: "none"} : null} type="button" className="btn btn-warning" onClick={e => this.marcaComoFeita(cadaTarefa)}> 
                            Marca como feita 
                        </button>
                        <button style={!cadaTarefa.feita ? {display: "none"} : null} type="button" className="btn btn-warning" onClick={e => this.marcaComoDesfeita(cadaTarefa)}> 
                            Marca como desfeita 
                        </button>
                    </td>

                        </td>

                    </tr>

                ))
                
            )

        }

    render(){
        return(
            <div className="form">{/*formulário bootstrap*/}
                <div className="form-group">{/*grupo de dados(label e input)*/}
                    <label htmlFor="descricao">Descrição</label>
                    <input className="form-control" type="text" value={this.state.descricao} 
            onChange={e => this.setDescricao(e)}>

            </input>

                </div>

                <div>
                <div className="form-group">{/*grupo de dados(label e input)*/}
                    <label htmlFor="quem">Quem</label>
                    <input className="form-control" type="text" value={this.state.quem} 
            onChange={e => this.setQuem(e)}>

            </input>

                </div>

                
                <div className="form-group">{/*grupo de dados(label e input)*/}
                    <label htmlFor="onde">Onde</label>
                    <input className="form-control" type="text" value={this.state.onde} 
            onChange={e => this.setOnde(e)}>

            </input>

                </div>
                <div className="form-group">{/*grupo de dados(label e input)*/}
                    <label htmlFor="prioridade">Prioridade</label>
                    <input className="form-control" type="number" value={this.state.prioridade} 
            onChange={e => this.setPrioridade(e)}>

            </input>

                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="button" onClick={e => this.cadastrar()}>Cadastrar</button>

                </div>
                </div>

                {/*Lista de tarefas do banco */}
                <div className="container">
                    
                    Lista de tarefas
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Quem</th>
                                <th>Onde</th>
                                <th>Prioridade</th>
                                <th>Criada em</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>{/* cria uma linha para cada tarefa */}
                            {this.criaLinhasTabela()}
                        </tbody>

                    </table>

                </div>
            </div>
        )
    }

}
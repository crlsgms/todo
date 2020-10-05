// importa o React e as classes para rotas
import React from 'react'
import {Router, Route, Redirect, Switch} from  'react-router-dom'
//importa a classe para histórico de navegação
import {createBrowserHistory} from 'history'

//importa as rotas criadas nos .jsx
import Partida from './Partida'
import Sobre from './Sobre'

//obter o histórico do navegador
const history = createBrowserHistory()

//criar componente de função arrow
export default props => (
    <Router history={history}>
        <Switch>
            <Route path="/partidas" component={Partida}/>
            <Route path="/sobre" component={Sobre}/>
            <Redirect from="*" to="/partidas"/>
        </Switch>
    </Router>
)
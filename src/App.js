import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { NotFound } from './views/NotFound'
import { PaisView } from './views/PaisView'
import { CiudadView } from './views/CiudadView'
import { EmpresaView } from './views/EmpresaView'
import { MainView } from './views/MainView'
import { PuestosView } from './views/PuestosView'

const App = () => (
  <div className="App">
  <NavBar />
  <div className="container">
    <Switch>
      <Route path="/" exact component={ MainView } />
      <Route path="/paises" exact component={ PaisView } />
      <Route path="/ciudades" exact component={ CiudadView } />
      <Route path="/empresas" exact component={ EmpresaView } />
      <Route path="/puestos" exact component={ PuestosView } />
      <Route component={ NotFound } />
    </Switch>
  </div>
</div>
)

export default App;
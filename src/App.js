import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { PaisView } from './views/PaisView'
import { CiudadView } from './views/CiudadView'
import { NavBar } from './components/NavBar.jsx'
import { Api } from './views/Api.jsx'

const App = () => (
  <>
  <NavBar />
  <div className="container">
    <Switch>
      <Route path="/Paises" exact component={ PaisView } />
      <Route path="/Ciudades" exact component={ CiudadView } />
      <Route path="/Api" exact component={ Api } />
    </Switch>
  </div>
</>
)

export default App;
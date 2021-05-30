import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CountrieView } from './views/CountrieView'
import { CiudadView } from './views/CiudadView'
import { NavBar } from './components/NavBar.jsx'


const App = () => (
  <>
  <NavBar />
  <div className="container">
    <Switch>
      <Route path="/Countries" exact component={ CountrieView } />
      <Route path="/Cities" exact component={ CiudadView } />

    </Switch>
  </div>
</>
)

export default App;
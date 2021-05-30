import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CountrieView } from './views/CountrieView'
import { CitiesView } from './views/CitiesView'
import { NavBar } from './components/NavBar.jsx'


const App = () => (
  <>
  <NavBar />
  <div className="container">
    <Switch>
      <Route path="/Countries" exact component={ CountrieView } />
      <Route path="/Cities" exact component={ CitiesView } />

    </Switch>
  </div>
</>
)

export default App;
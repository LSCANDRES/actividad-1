import React from 'react';
import {CitiesList } from '../components/CitiesList';
import { GetData,PostCities,DeleteCities } from '../client';



export class CitiesView extends React.Component {
  constructor() {
    super();
    this.state = {
      Cities: [],
      newCities: ''
    };
  }

    componentDidMount(){
      GetData().then(res => this.setState({
        Cities : res.places

      }))
    }


  addnewCities = () => {
    
    PostCities(this.state.newCities).then(res => this.setState({
      Cities: [...this.state.Cities, res]
    }))
  }

  BorrarCitie = (id) => {
    DeleteCities(id).then(res => {
      GetData().then(res => this.setState({
        Cities: res.places

      }));

    })

  }

  handlenewCities = (e) => {
    this.setState({
      newCities: e.target.value,
    }
    );
  }

  handlenewCitiesSubmit = (e) => {
    e.preventDefault();
    if (this.state.newCities.trim() === '') {
      return false;
    }
    this.addnewCities(e, this.state.newCities)
  }



  render() {
    return (
      
      <div>
        <form onSubmit={this.handlenewCitiesSubmit}>
          <label>Places:</label>
          <input type="text" required value={this.state.newCities} onChange={(e) => this.handlenewCities(e)}></input>
          <button type="submit">Add</button>
        </form>
        <ul>
          <CitiesList Cities={this.state.Cities} onDeletePais={this.BorrarPais}></CitiesList>
        </ul>
      </div>
      
    );
  }

}
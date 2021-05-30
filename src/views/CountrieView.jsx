import React from 'react';
import {CountrieList } from '../components/CountrieList';
import { GetData,PostCountrie,DeleteCountrie } from '../client';



export class CountrieView extends React.Component {
  constructor() {
    super();
    this.state = {
      Countries: [],
      newCountrie: ''
    };
  }

    componentDidMount(){
      GetData().then(res => this.setState({
        Countries : res.countries

      }))
    }


  addnewCountrie = () => {
    
    PostCountrie(this.state.newCountrie).then(res => this.setState({
      Countries: [...this.state.Countries, res]
    }))
  }

  BorrarPais = (id) => {
    DeleteCountrie(id).then(res => {
      GetData().then(res => this.setState({
        Countries: res.countries

      }));

    })

  }

  handlenewCountrie = (e) => {
    this.setState({
      newCountrie: e.target.value,
    }
    );
  }

  handlenewCountrieSubmit = (e) => {
    e.preventDefault();
    if (this.state.newCountrie.trim() === '') {
      return false;
    }
    this.addnewCountrie(e, this.state.newCountrie)
  }



  render() {
    return (
      
      <div>
        <form onSubmit={this.handlenewCountrieSubmit}>
          <label>Countrie:</label>
          <input type="text" required value={this.state.newCountrie} onChange={(e) => this.handlenewCountrie(e)}></input>
          <button type="submit">Add</button>
        </form>
        <ul>
          <CountrieList Countries={this.state.Countries} onDeletePais={this.BorrarPais}></CountrieList>
        </ul>
      </div>
      
    );
  }

}
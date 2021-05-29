import React from 'react';
import { ApiList } from '../components/ApiList';
import axios from 'axios';
import { getData, postPais, deletepais } from '../client';



export class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      apiPaises: [],
      withError: false,
      newApi: ''
    };
  }

  componentDidMount() {
    getData().then(res => this.setState({
      // dbPilar: res,
      apiPaises: res.countries

    }));
  }



  /* 
  componentDidMount() {
      this.setState({
          apiPaises: localStorage.getItem('apiPaises') ? JSON.parse(localStorage.getItem('apiPaises')) : []  ,
      }); 'https://jsonplaceholder.typicode.com/todos' 'https://api-fake-pilar-tecno.herokuapp.com/'   https://api-fake-pilar-tecno.herokuapp.com/jobs/1
                  axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries')
                            .then(res => this.setState({
                                apiapiPaises: res.data
  
                            }))
                            .catch(err=> this.setState({
                                withError:true
                            }))
                  axios.post('https://api-fake-pilar-tecno.herokuapp.com/countries',
                              {
                                  id: '2',
                                  name: 'brasil'
                              })
                              .then(res => console.log(res))
    }*/

  /* componentDidUpdate(prevProps, prevState){
      if(apiPaises !== this.state.apiPaises){
      }
    } */







  /* addnewApi = (newApi) => {
          this.setState({
              apiPaises: [...this.state.apiPaises, {Pais: this.state.newApi,}],
              newApi: ''
          });
    } */

  addnewApi = () => {

    postPais(this.state.newApi).then(res => this.setState({
      apiPaises: [...this.state.apiPaises, res]
    }))
  }



  /* BorrarPais = (id) => {
    deletepais(this.state.apiPaises).then(() => this.setState({
      apiPaises: this.state.apiPaises.filter((_, idx) => idx !== id)
    }));
  } */

  /* BorrarPais = (id) => {
    deletepais(this.state.apiPaises)
    .then(() => this.setState({
      apiPaises: this.state.apiPaises.filter((_, idx) => idx !== id)
    }));
  } */

  BorrarPais = (id) => {
    deletepais(id).then(res => {
      getData().then(res => this.setState({
        apiPaises: res.countries

      }));

    })

  }

  handlenewApi = (e) => {
    this.setState({
      newApi: e.target.value,
    }
    );
  }

  handlenewApiSubmit = (e) => {
    e.preventDefault();
    if (this.state.newApi.trim() === '') {
      return false;
    }
    this.addnewApi(e, this.state.newApi)
  }



  render() {
    return (

      <div>
        {/* {this.state.withError && <p>hubo error</p>} */}
        <form onSubmit={this.handlenewApiSubmit}>
          <label>Pais:</label>
          <input type="text" required value={this.state.newApi} onChange={(e) => this.handlenewApi(e)}></input>

          <button type="submit">Agregar</button>
        </form>
        <ul>
          <ApiList apiPaises={this.state.apiPaises} onDeletePais={this.BorrarPais}></ApiList>
        </ul>
      </div>
    );
  }
}

import React from 'react'
import { TodoList } from './componente/TodoList/TodoList'
import './App.css'

function App(){

    return(

      <>
      <h1 align="center">Listado de Puestos</h1>
      <div className="form">
      < TodoList/>
      </div>
      </>
    );
  }


export default App;






/* this.state={   
}
this.addtask=this.addTask.bind(this)  *//* cuando conectamos funciones a hijo tenemos que conectar la funcion al padre 
 cuando nosotros pasamos funciones al hijo al lo que va a tratar de hacer es ejecutar la funcion que nosotros le pasamos por medio de la propiedaden el contexto 
  ES PASAR -LA FUNCION QUE MODIFICA el estado de este componente al hijo pero que cuando se ejecute lo haga en el padre y que no lo
de ese componente y no en el contexto del padre lo que tenemos que hacer es conectar la funcuion que nosotros pasamos como propiedadal componenete padre para que se ejecute
en el contexto del padre para hacerlo tenemos que hacer lo de arriba
El this lo que hace es decirle que enlace la funcion a este contexto es decir ami a todo entc cuando yo ejecute la tarea addTask */

/* El metodo render cada vez que detecta un cambio en las props que tiene  la class App o en el
  estado este se vuelve a ejecutar  */
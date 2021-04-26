import React from 'react'
import { Form, Button, ListGroup } from "react-bootstrap";

export class TodoList extends React.Component{
    constructor() {
        super();
        this.state = {
            todoList: [] 
        }
    }

    addTodo = (event)=> {
        event.preventDefault(); 

        const data = event.target,
        Odelarreglo = {
            nommbrePuesto: data.nommbrePuesto.value,
            empresa: data.empresa.value,
            ciudad: data.ciudad.value,
            pais: data.pais.value

        }

        this.state.todoList.push(Odelarreglo);
 
        this.setState({
            todoList: this.state.todoList
        })
    }

    deleteTodo = (event)=> {

        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }
    render() {
        console.log(this.state.todoList)
        return(
            <>
            <Form onSubmit={this.addTodo}>
                <Form.Group>
                    <Form.Label>Nombre del puesto</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese nombre" name="nommbrePuesto"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Nombre de la empresa </Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese empresa" name="empresa"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre de la ciudad</Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese la ciudad" name="ciudad"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre del pais </Form.Label>
                    <Form.Control required type="text" placeholder="Ingrese pais" name="pais"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Agregar
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.todoList.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                 {task.nommbrePuesto} {task.empresa} {task.ciudad} {task.pais}
                                 <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                     Borrar
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}
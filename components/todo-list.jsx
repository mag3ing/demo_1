import React, {Component} from 'react'

export default class TodoList extends Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo=>{
                    return <li key={todo.id}>{todo.text}</li>
                })}
            </ul>
        );
    }
}
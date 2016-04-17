import React, {Component} from 'react'
import TodoInput from './todo-input.jsx'
import TodoList from './todo-list.jsx'
import { connect } from 'react-redux'

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: 'initial text'
        }
    }
    changeHandle(event){
        this.setState({
            inputText: event.target.value
        });
    }
    render(){
        return (
            <div>
                <h4>this is todo demo</h4>
                <TodoInput dispatch={this.props.dispatch} />
                <TodoList todos={this.props.todos} />
            </div>
        );
    }
}

export default connect(state=>state)(TodoApp);

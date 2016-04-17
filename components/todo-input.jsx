import React, {Component} from 'react'
import addTodo from '../redux/action.js'

export default class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state={
            inputText: ''
        }
    }
    changeHandle(event){
        this.setState({
            inputText: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText));
        
    }
    render(){
        return(
            <div>
                <input type="text"
                       placeholder="text todo input"
                       onChange={::this.changeHandle}
                />
                <button onClick={::this.handleSubmit}>submit</button>
            </div>
        );
    }
}
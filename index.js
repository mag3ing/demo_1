/**
 * Created by mag on 16-4-4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import Banner from './banner/banner.js';
import TodoApp from './components/TodoApp.jsx'
import { Provider } from 'react-redux'
import configureState from './redux/store.js'

let initialState = {
    todos: [{
        id: 0,
        text: 'initial text',
        completed: false
    }]
};
let store = configureState(initialState);
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ,
    document.getElementById('content')
);
module.hot.accept();

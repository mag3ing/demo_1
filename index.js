/**
 * Created by mag on 16-4-4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import Banner from './banner/banner.js';
import TodoApp from './components/TodoApp.jsx'
ReactDOM.render(
    <TodoApp />
    ,
    document.getElementById('content')
);
module.hot.accept();

import React, { Component } from 'react';
import TodoList from './components/todoList'
import TodoInput from './components/todoInput'
import Filters from './components/filters'
import styles from './components/styles.module.scss'

class App extends Component {
  render = () =>
  <div id={styles.todoHolder}>
    <TodoInput />
    <TodoList />
    <Filters />
  </div>
    
}

export default App;

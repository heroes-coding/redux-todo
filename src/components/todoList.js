import React, { Component } from 'react'
import { DONE_FILTER, UNDONE_FILTER } from '../definitions'
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'
import styles from './styles.module.scss';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case DONE_FILTER:
      return todos.filter(todo => todo.completed)
    case UNDONE_FILTER:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

class TodoList extends Component {
  render = () =>
    <ul>
      {this.props.todos.map(({i, name, completed}) => 
        <li 
          key={i} 
          className={completed ? styles.done : styles.toDo }
          onClick={() => this.props.toggleTodo(i)}
        >
          {name}
        </li>
      )}
    </ul>
}

const mapStateToProps = state => 
  ({ todos: getVisibleTodos(state.todos, state.filter) })

export default connect(mapStateToProps, { toggleTodo })(TodoList)
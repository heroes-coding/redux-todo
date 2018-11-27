import React, { Component } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  render = () =>
    <div>
      <input ref={this.input} />
      <button onClick={() => this.props.addTodo(this.input.current.value)}>
        Add Todo
      </button>
    </div>

}

export default connect(null, { addTodo })(TodoInput)
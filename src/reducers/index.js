import { ADD_TODO, TOGGLE_TODO, SET_TODO_VISIBILITY } from '../actions'
import { combineReducers } from 'redux'
import { ALL_FILTER } from '../definitions'

// REDUCERS
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: 
      return [ ...state, { i: state.length, name: action.todo, completed: false }]
    case TOGGLE_TODO:
      const oldTodo = state[action.i]
      return [ ...state.slice(0,action.i), {...oldTodo, completed: !oldTodo.completed }, ...state.slice(action.i+1,) ]
    default:
      return state
  }
}

const filter= (state = ALL_FILTER, action) => {
  if (action.type === SET_TODO_VISIBILITY) {
    return action.filter
  }
  return state
}

const rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer
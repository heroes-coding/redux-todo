// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_TODO_VISIBILITY = 'SET_TODO_VISIBILITY'

// action callers
export const addTodo = todo => ({ type: ADD_TODO, todo })
export const toggleTodo = i => ({ type: TOGGLE_TODO, i })
export const setTodoVisibility = filter => ({ type: SET_TODO_VISIBILITY, filter })

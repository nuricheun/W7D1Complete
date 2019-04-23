import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todos_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextTodos;
    switch (action.type) {
        case RECEIVE_TODOS:
            nextTodos = {};
            action.todos.forEach(el=>{
                nextTodos[el.id] = el;
            });
            return nextTodos;
        case RECEIVE_TODO:
            nextTodos = merge({}, state);
            nextTodos[action.todo.id] = action.todo;
            return nextTodos;
        default:
            return state;
    }
};

export default todosReducer;
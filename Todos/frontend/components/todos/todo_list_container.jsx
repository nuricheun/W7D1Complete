
import {allTodos} from '../../reducers/selectors';
import TodoList from './todo_list';
import {receiveTodo} from '../../actions/todos_actions';
import {connect} from 'react-redux';
import React from 'react';

const mapStateToProp = state => {
    return {
        todos: Object.values(state.todos)
    };
};

const dispatchToProp = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
    mapStateToProp, 
    dispatchToProp
)(TodoList);


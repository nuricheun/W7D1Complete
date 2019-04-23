import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

export default ({todos, receiveTodo}) => { 
    return (
        <>
            <TodoForm receiveTodo={receiveTodo}/>
            <ul>
                {todos.map( (todo) => (
                    <TodoListItem key={todo.id} todo={todo}/>
                    )
                )}
            </ul>
        </>
    );
};
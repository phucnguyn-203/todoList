import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ListTodo = styled.ul`
    margin-top: 30px;
    max-height: 70%;
    overflow-y: auto;
`

const TodoList = (props) => {

    //get todoList from props
    const { todoList } = props;

    return (
        <ListTodo>
            {todoList.map(todo => (
                <Todo
                    key={todo.id}
                    content={todo.content}
                    isComplete={todo.complete}
                    handleChecked={() => props.handleChecked(todo.id)}
                    handleDelete={() => props.handleDelete(todo.id)}
                />
            ))}
        </ListTodo>
    );
};

export default TodoList;
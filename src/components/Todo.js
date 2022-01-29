import React from 'react';
import styled from 'styled-components';

const ToDoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`

const TodoContent = styled.span`
    font-size: 18px;
    text-decoration: ${props => props.isComplete ? 'line-through' : 'none'}
`

const ToDoAction = styled.div`
    display: flex;
`
const ToDoDelete = styled.div`
    padding: 10px 15px;
    color: #dc3545;
    cursor: pointer;

    &:hover {
        background-color: #dc3545;
        color: #fff;
        border-radius: 5px;
    }
`
// extends in style-component
const TodoComplete = styled(ToDoDelete)`
    color: #3bd614;
    &:hover {
        background-color: #3bd614;
    }
`
const Todo = (props) => {
    return (
        <ToDoItem>
            <TodoContent isComplete={props.isComplete}>{props.content}</TodoContent>
            <ToDoAction>
                <TodoComplete onClick={props.handleChecked} >
                    <i className="fas fa-check"></i>
                </TodoComplete>
                <ToDoDelete onClick={props.handleDelete}>
                    <i className="fas fa-trash-alt"></i>
                </ToDoDelete>
            </ToDoAction>
        </ToDoItem>
    );
};

export default Todo;
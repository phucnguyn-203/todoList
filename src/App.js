import React, { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import Button from './components/Button';
import Input from './components/Input';
import TodoList from './components/TodoList';
import styled from 'styled-components';


const Container = styled.div`
    width: 650px;
    max-width: 100%;
    height: 500px;
    background-color: #fff;
    margin: 150px auto;
    border: 1px solid #000;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`
const InputTask = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const InputContainer = styled.div`
    flex: 1;
`


const App = () => {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('TODO')) ?? []);
  }, []);

  // when todoList change the callback of useEffect will run 
  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(todoList));
  }, [todoList]);


  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  }


  const handleAdd = () => {
    if (todo.length === 0)
      return;

    setTodoList(prevList => [
      {
        id: v4(),
        content: todo,
        complete: false
      },
      ...prevList
    ]);
    setTodo('');
    inputRef.current.focus();
  }

  const handleChecked = (id) => {
    setTodoList(prevList =>
      prevList.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo)
    )
  }

  const handleDelete = (id) => {
    setTodoList(prevList =>
      prevList.filter(todo => todo.id !== id)
    )
  }


  // render UI
  return (
    <Container>
      <h2>Todo List</h2>
      <InputTask>
        <InputContainer>
          <Input
            value={todo}
            type='text'
            placeholder='What do you need to do today?'
            onChange={handleChangeTodo}
            inputRef={inputRef}
          />
        </InputContainer>
        <Button
          text='Add'
          bgColor='#007bff'
          onClick={handleAdd}
        />
      </InputTask>
      <TodoList
        todoList={todoList}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </Container>
  );
};

export default App; 
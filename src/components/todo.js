import React,  { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { insert, remove, update, toggle } from '../reducers/todoReducer';

function Todo() {  
  const [todoInput, setTodoInput] = useState("");
  let nextId = useRef(2);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onRemove = () => {
    setTodoInput("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (todoInput.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }
    dispatch(insert({id: nextId.current, text: todoInput}));
    nextId.current += 1;
    onRemove();
  };

  const todos = useSelector((state) => state.todo.value)

  return (
    <div>
      <div>
        <input
          onChange={onChangeInput}
          onKeyPress={onKeyPress}
          value={todoInput}
          placeholder="할 일을 입력하세요!"
        />
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h6>{todo.text}</h6>
            <button onClick={() => dispatch(remove(todo.id))}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
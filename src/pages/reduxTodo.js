import React from 'react';
import PageButton from '../components/pageButton';
import Todo from '../components/todo';

function Reduxpage() {
  return (
    <div>
        <Todo />          
        <br></br>
        <PageButton path="/"/>
    </div>
  );
}

export default Reduxpage;
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reduxpage from './pages/reduxpage';
import Counter from './pages/counter';
import ReduxTodo from './pages/reduxTodo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Reduxpage/>}/>
        <Route path='/c' element = {<Counter/>}/>
        <Route path='/todo' element = {<ReduxTodo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

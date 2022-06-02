import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reduxpage from './pages/reduxpage';
import Counter from './components/counter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Reduxpage/>}/>
        <Route path='/c' element = {<Counter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

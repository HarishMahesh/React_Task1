import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {
  const [isLogedIn, setLogedIn]= useState(false)
  return (
    <div className="App">
      <h1>Todo List</h1>
      {isLogedIn?<button>Logout</button>:<button>Login</button>}
      <Todo title = 'harish' job = 'software enginerr' fun = {setLogedIn}></Todo>
      <Todo title = 'person2' job = 'data engineer'></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  );
}

export default App;

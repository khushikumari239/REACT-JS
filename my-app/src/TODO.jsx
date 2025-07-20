// import logo from './logo.svg';
// import './App.css';

// import React from 'react';

import { useState } from 'react';

export default function App () {
  
  // state 
  const [todos, setTodos] = useState([{
    title : "Go to gym",
    description : "Hit the gym regularly",
    done : false


  }])

  function addTodo() {
    // alert("hi");
    let newArray = [];
    for (let i =0; i<todos.length; i++) {
      newArray.push(todos[i]);
    }

    newArray.push({
      title: "Eat food",
      description : "eat food properly",
      done: true,
    })
    setTodos(newArray);
  }


  return ( 
  <div>
    <button onClick={addTodo}>Add todo </button>  
    
     {JSON.stringify(todos)}

  </div>

)
}

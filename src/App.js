import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {


// useState
  const[inputText, setInputText] = useState("");
  const[status, setStatus] = useState("all");
  const[todos, setTodos] = useState([]);
  const[filterTodos, setFilterTodos] = useState([]);


// useEffect

  useEffect(() => {
      getLocalStorage();
  }, []);

  useEffect(() => {
    checkStatus();
    saveLocalStorage();
  },[todos, status]);


// function
  const checkStatus = () => {
    switch(status) {
      case "uncomplete":
        setFilterTodos(todos.filter((todo) => (todo.completed === false && todo.text !== "")));
        break;
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilterTodos(todos.filter((todo) => todo.text !== ""));
        break;
    }
  }

  const saveLocalStorage = () => {
    localStorage.setItem("jobs", JSON.stringify(todos));    
  }

  const getLocalStorage = () => {
    if(localStorage.getItem("jobs") === null) {
      localStorage.setItem("jobs", JSON.stringify(todos));    
    }
    else {
      const localData = JSON.parse(localStorage.getItem("jobs"));
      setTodos(prev => [...prev, ...localData]);
    }
    
  }

  return (
    <div>
      <header className="header">
        <h1>To do list</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        setTodos={setTodos}
        setStatus={setStatus}
        status={status}/>
      <Todolist todos={todos} filterTodos={filterTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

import React from "react"
import Todo from "./Todo";

const Todolist = ({todos, filterTodos, setTodos}) => {
	return (
		<div className="todo-container">
			{ filterTodos.map((todo, index) => {
				return <Todo key={index} todo={todo} todos={todos} setTodos={setTodos}/>
			})
			}
		</div>
	);
}

export default Todolist;
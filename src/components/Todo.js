import React from "react"

const Todo = ({todo, todos, setTodos}) => {

	const checkComplete = () => {
		setTodos(
			todos.map((element) => element.id === todo.id ? 
				{...element, completed: !element.completed}:
				element)
		);
	}

	const deleteWork = () => {
		setTodos(
			todos.filter((element) => element.id !== todo.id)
		);
	}

	//style={{textDecoration: todo.completed ? "line-through" : ""}}

	return (
		<div className="content">
			<p className={`text ${todo.completed ? "completed" : ""}`}
				>{todo.text}</p>
			<div className="btns">
				<button onClick={checkComplete} className="btn-check fa-solid fa-check"></button>
				<button onClick={deleteWork} className="btn-delete fa-solid fa-trash-can"></button>
			</div>
		</div>
	);
}

export default Todo;
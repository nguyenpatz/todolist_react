import React from "react"

const Form = ({inputText, setInputText, setTodos, setStatus, status}) => {

	const inputHandler = (e) => {
		setInputText(e.target.value)
	} 

	const submitHandler = (e) => {
		e.preventDefault();
		setTodos(prev => [...prev, {text: inputText, completed: false, id: Math.random() * 1000}]);
		setInputText("");
	}

	const statusHanlder = (e) => {
		setStatus(e.target.value);
	}


	return (
		<div className="form-container">
			<form className="form">
				<input type="text" placeholder="Type your work" value={inputText} onChange={inputHandler}/>
				<button type="submit" onClick={submitHandler}>ADD</button>
			</form>
			<div className="select-container">
				<select id="select" onClick={statusHanlder}>
					<option value="all">all</option>
					<option value="completed">completed</option>
					<option value="uncomplete">uncomplete</option>
				</select>
			</div>
		</div>
	);
}

export default Form;
import React from "react";
import ReactDOM from "react-dom";

import { TodoItem } from "./TodoItem.jsx";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.newItem = React.createRef();
		this.state = {
			todos: ["Make Bed", "Take trash out", "Clean porch"]
		};
	}

	render() {
		var todos = this.state.todos;
		var todosLength = todos.length;

		todos = todos.map(
			function(item, index) {
				return (
					<TodoItem item={item} key={index} delete={this.delete} />
				);
			}.bind(this)
		);

		return (
			<div>
				<div className="text-center">
					<h1>Todos</h1>
				</div>
				<div className="list">
					<form id="myform" onSubmit={this.add}>
						<input
							className="w-100"
							type="text"
							ref={this.newItem}
						/>
					</form>
					{todos}
					<div className="list-item footer">
						{todosLength} items left.
					</div>
				</div>
				<div className="bottom" />
				<div className="bottom-last" />
			</div>
		);
	}

	//functions
	delete = item => {
		var updatedTodo = this.state.todos.filter(function(val, index) {
			return item !== val;
		});

		this.setState({
			todos: updatedTodo
		});
	};

	add = e => {
		e.preventDefault();
		var updatedTodo = this.state.todos;
		updatedTodo.push(this.newItem.current.value);

		this.setState({
			todos: updatedTodo
		});

		document.getElementById("myform").reset();
	};
}

import React from "react";
import ReactDOM from "react-dom";

import { TodoItem } from "./TodoItem.jsx";
//import { AddItem } from "./AddItem.jsx";
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
					<h1>Todo List</h1>
				</div>
				<div className="list">
					<form onSubmit={this.add}>
						<input
							className="w-100"
							type="text"
							ref={this.newItem}
						/>
					</form>
					{todos}
				</div>
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

		console.log(this.state.todos);
		var updatedTodo = this.state.todos;
		console.log(updatedTodo);

		updatedTodo.push(this.newItem.current.value);

		console.log(updatedTodo);

		this.setState({
			todos: updatedTodo
		});
	};

	// _handleKeyPress = (e) => {
	// 	e.preventDefault();
	// 	if (e.key === 13) {
	// 		var updatedTodo = this.state.todos;
	// 		updatedTodo.push(this.newItem);
	//
	// 		this.setState({
	// 			todos: updatedTodo
	// 		});
	// 	}
	// }
}

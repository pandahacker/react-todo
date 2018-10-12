import React from "react";
import ReactDOM from "react-dom";

import { TodoItem } from "./TodoItem.jsx";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: ["Make Bed", "Take trash out", "Clean porch"]
		};
	}

	render() {
		var todos = this.state.todos;

		todos = todos.map(
			function(item, index) {
				return <TodoItem item={item} key={index} />;
			}.bind(this)
		);

		return (
			<div>
				<div className="text-center">
					<h1>Todo List</h1>
				</div>
				<div className="list">{todos}</div>
			</div>
		);
	}
}

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class TodoItem extends React.Component {
	render() {
		return (
			<div className="list-item">
				<span>{this.props.item}</span>
				<i className="far fa-times-circle" onClick={this.deleteTodo} />
			</div>
		);
	}
}

TodoItem.propTypes = {
	item: PropTypes.string
};

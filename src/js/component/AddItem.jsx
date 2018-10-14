import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class AddItem extends React.Component {

    componentDidMount(){
        document.getElementbyId("submitForm").addEventListener('keydown', _handleKeyPress(e){
            e.preventDefault();
            if (e.key === 13) {
                this.props.add(this.newItem.value);
            }
        });
    }

    render(){

        return(
            <form id="submitForm">
                <input className="w-100" type="text" ref={this.newItem}></input>
            </form>
        );
    }

//    _handleKeyPress
}

AddItem.propTypes = {
	add: PropTypes.func
};

import React from "react";

class Task extends React.Component {
    constructor(props) {
	super(props);

	this.state = props.state;
    }
    render() {
        return (
		<div><label>{this.state.text}</label>
		  <input type="checkbox">Checkbox</input>
		</div>
        )
    }
}

export default Task;

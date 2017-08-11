import React from "react";

class Input extends React.Component {
	
	//构造函数
	constructor(props) {
		super();

		this.state = {
			value: props.newToDo
		}
		
		this.onChange = (event) => {
			this.setState({
				value: event.target.value
			});
			props.onInputChange(event);
		}
	}
	
	render() {
		return(
			<form>
				<div className="form-group">
					<label htmlFor="listInput">
						Email address => {this.state.value}
					</label>
					<input type="text" className="form-control" id="listItemInput" value={this.state.value} onChange={this.onChange} placeholder="Add new todo" />
					<button className="btn btn-primary">
						Add Item
					</button>
				</div>
			</form>
		);
	}
}


export default Input;
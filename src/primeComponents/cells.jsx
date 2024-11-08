import React, { Component } from "react";
import Cell from "./cell";
import ".././stylesheets/style.css";
class Cells extends Component {
	render() {
		return (
			<div className='Cells'>
				{this.props.cells.map((cell, cellidx) => {
					return <Cell key={cellidx} cell={cell} />;
				})}
			</div>
		);
	}
}

export default Cells;

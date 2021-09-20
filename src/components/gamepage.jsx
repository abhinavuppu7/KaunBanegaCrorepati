import React, { Component } from "react";
import Question from "./question";
import Level from "./Level";
import Poll from "./poll";

class GamePagee extends Component {
	state = { level: 0 };
	handlelevel = () => {
		var { level } = this.state;
		level += 1;
		this.setState({ level });
	};
	render() {
		return (
			<div
				style={{
					backgroundImage: `url(" https://i2.wp.com/campaignsoftheworld.com/wp-content/uploads/2017/08/KBC-logo.jpg?ssl=1"
					       
					 )`,
					backgroundRepeat: "no-repeat",
					minHeight: "100vh",
					backgroundSize: "cover",
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<Question qlevel={this.state.level} handlelvl={this.handlelevel} />

				<Level qlevel={this.state.level} />
			</div>
		);
	}
}

export default GamePagee;

import React, { Component } from "react";
import Question from "./question";
import Level from "./Level";
import "../styles/gamepage.css";

class GamePagee extends Component {
	state = {
		level: 0,
	};
	handlelevel = () => {
		var { level } = this.state;
		level += 1;
		this.setState({ level });
	};
	render() {
		return (
			<div
				className="gamepage"
				style={{
					backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-purple-light-effect-electronic-technology-background-backgrounddatabusinessblueelectronictechnologyintelligentblue-backgroundtechnology-backgroundlightcool-image_78722.jpg"
					   
				 )`,
				}}
			>
				{/* <Currentremainder qlevel={this.state.level} /> */}
				<Question qlevel={this.state.level} handlelvl={this.handlelevel} />

				<Level qlevel={this.state.level} />
			</div>
		);
	}
}

export default GamePagee;
// https://i2.wp.com/campaignsoftheworld.com/wp-content/uploads/2017/08/KBC-logo.jpg?ssl=1

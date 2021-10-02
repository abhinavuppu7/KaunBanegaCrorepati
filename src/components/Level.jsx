import React, { Component } from "react";
import LevelComponent from "./levelcomponent";
import "../styles/gamepageelements.css";

class Level extends Component {
	state = {
		level: [
			{
				stage: 12,
				money: "1 Crore",
			},
			{
				stage: 11,
				money: "₹2500000",
			},
			{
				stage: 10,
				money: "₹1250000",
			},
			{
				stage: 9,
				money: "₹640000",
			},
			{
				stage: 8,
				money: "₹320000",
			},
			{
				stage: 7,
				money: "₹80000",
			},
			{
				stage: 6,
				money: "₹40000",
			},
			{
				stage: 5,
				money: "₹20000",
			},
			{
				stage: 4,
				money: "₹10000",
			},
			{
				stage: 3,
				money: "₹5000",
			},
			{
				stage: 2,
				money: "₹2500",
			},
			{
				stage: 1,
				money: "₹100",
			},
		],
	};
	render() {
		const { level } = this.state;
		return (
			<div className="level">
				{level.map((lvl) => {
					return (
						<LevelComponent
							key={lvl.stage}
							stage={lvl.stage}
							money={lvl.money}
							qlevel={this.props.qlevel}
						/>
					);
				})}
			</div>
		);
	}
}

export default Level;

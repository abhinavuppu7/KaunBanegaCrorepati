import React, { Component } from "react";
import LevelComponent from "./levelcomponent";

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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
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
				{/* <button
					style={{
						width: this.props.qlevel === 12 ? "250px" : "200px",
						backgroundColor: "purple",
						border: "0px",
					}}
					type="button"
					color="purple"
					class={
						this.props.qlevel === 12 ? "btn btn-success" : "btn btn-primary"
					}
				>
					1 Crore
				</button>
				<button
					style={{ width: this.props.qlevel === 11 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 11 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹5000000
				</button>
				<button
					style={{ width: this.props.qlevel === 10 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 10 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹2500000
				</button>
				<button
					style={{ width: this.props.qlevel === 9 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 9 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹1250000
				</button>
				<button
					style={{ width: this.props.qlevel === 8 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 8 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹640000
				</button>
				<button
					style={{ width: this.props.qlevel === 7 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 7 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹320000
				</button>
				<button
					style={{ width: this.props.qlevel === 6 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 6 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹160000
				</button>
				<button
					style={{ width: this.props.qlevel === 5 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 5 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹80000
				</button>
				<button
					style={{ width: this.props.qlevel === 4 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 4 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹40000
				</button>
				<button
					style={{ width: this.props.qlevel === 3 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 3 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹20000
				</button>
				<button
					style={{ width: this.props.qlevel === 3 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 3 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹10000
				</button>
				<button
					style={{ width: this.props.qlevel === 2 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 2 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹5000
				</button>
				<button
					style={{ width: this.props.qlevel === 1 ? "250px" : "200px" }}
					type="button"
					class={
						this.props.qlevel === 1 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹2500
				</button>
				<button
					style={{
						width: this.props.qlevel === 0 ? "250px" : "200px",
						border: "solid gold",
					}}
					type="button"
					class={
						this.props.qlevel === 0 ? "btn btn-success" : "btn btn-primary"
					}
				>
					₹1000
				</button> */}
			</div>
		);
	}
}

export default Level;

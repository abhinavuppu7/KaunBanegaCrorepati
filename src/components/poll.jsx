import React, { Component } from "react";
import Modal from "react-modal";
import { DynamicBarChart } from "react-dynamic-charts";
import "react-dynamic-charts/dist/index.css"; // Don't forget to import the styles

class Poll extends Component {
	state = {
		// data: [
		// 	{
		// 		name: "",
		// 		values: [
		// 			{
		// 				id: 1,
		// 				label: this.props.options[0],
		// 				value: 12,
		// 				color: "red",
		// 			},
		// 			{
		// 				id: 2,
		// 				label: this.props.options[1],
		// 				value: 100,
		// 				color: "yellow",
		// 			},
		// 			{
		// 				id: 3,
		// 				label: this.props.options[2],
		// 				value: 100,
		// 				color: "green",
		// 			},
		// 			{
		// 				id: 4,
		// 				label: this.props.options[3],
		// 				value: 100,
		// 				color: "orange",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "",
		// 		values: [
		// 			{
		// 				id: 1,
		// 				label: this.props.options[0],
		// 				value: 9,
		// 				color: "red",
		// 			},
		// 			{
		// 				id: 2,
		// 				label: this.props.options[1],
		// 				value: 8,
		// 				color: "yellow",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "",
		// 		values: [
		// 			{
		// 				id: 1,
		// 				label: this.props.options[0],
		// 				value: 12,
		// 				color: "red",
		// 			},
		// 			{
		// 				id: 2,
		// 				label: this.props.options[1],
		// 				value: 13,
		// 				color: "yellow",
		// 			},
		// 		],
		// 	},
		// ],
	};
	Continue = async () => {
		await this.props.close();
	};
	render() {
		return (
			<Modal
				style={{
					overlay: {
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(255, 255, 255, 0.75)",
					},
					content: {
						position: "absolute",
						top: "auto",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",

						left: "20%",
						right: "20%",
						bottom: "15%",
						height: "inherit",
						width: "inherit",
						border: "1px solid #ccc",
						background: "purple",
						borderRadius: "10px",
						border: "solid 5px gold",
						outline: "none",
						padding: "20px",
					},
				}}
				isOpen={this.props.open}
			>
				<DynamicBarChart
					iterationTimeout={100}
					labelStyles={{ color: "white" }}
					data={this.props.data}
				/>
				{console.log(this.props.data)}
				<button
					style={{ width: "inherit" }}
					class="btn btn-warning"
					onClick={this.Continue}
				>
					<b>Continue Game</b>
				</button>
			</Modal>
		);
	}
}

export default Poll;

import React, { Component } from "react";
import Modal from "react-modal";
import { DynamicBarChart } from "react-dynamic-charts";
import "react-dynamic-charts/dist/index.css"; // Don't forget to import the styles

class Poll extends Component {
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

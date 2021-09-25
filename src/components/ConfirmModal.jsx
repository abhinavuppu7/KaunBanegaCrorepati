import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ConfirmModal(props) {
	async function yes() {
		await props.applyLifeline();
	}
	async function no() {
		await props.close();
	}
	return (
		<div style={{ height: "10px" }}>
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
						top: "30%",
						left: "20%",
						right: "20%",
						bottom: "30%",
						height: "20%",
						width: "60%",
						background: "purple",
						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						borderRadius: "10px",
						border: "solid 5px gold",
						outline: "none",
						padding: "20px",
						textDecorationColor: "white",
					},
				}}
				isOpen={props.open}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div style={{ color: "white" }}>
						<h3>
							Are you sure that you want to use {props.lifeline} lifeline?
						</h3>
					</div>
					<div style={{ display: "flex", alignContent: "space-between" }}>
						<button
							style={{ width: "100px" }}
							class=" btn btn-success"
							onClick={yes}
						>
							<b>Yes</b>
						</button>
						<button
							style={{ width: "100px", marginLeft: "10%" }}
							class="btn btn-danger"
							onClick={no}
						>
							<b>No</b>
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

import React, { useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function MessageModal(props) {
	async function playtext(a) {
		const text =
			"Iam not sure but I think the correct option is  " +
			a +
			"go for option " +
			a;
		console.log(props.ans);
		const utterance = new SpeechSynthesisUtterance(text);

		await setTimeout(speechSynthesis.speak(utterance), 9000);
	}

	useEffect(() => {
		if (props.open) playtext(props.ans);
	});
	async function Continue() {
		await props.close();
	}
	return (
		<div>
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
						// WebkitOverflowScrolling: "touch",
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
					<h3 style={{ color: "whitesmoke" }}>
						"Iam not sure but I think the correct option is {props.ans}"
					</h3>

					<button
						style={{ width: "inherit" }}
						class="btn btn-warning"
						onClick={Continue}
					>
						<b>Continue Game</b>
					</button>
				</div>
			</Modal>
		</div>
	);
}

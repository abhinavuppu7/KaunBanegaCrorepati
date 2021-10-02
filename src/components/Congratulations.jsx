import React from "react";
import Modal from "react-modal";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

Modal.setAppElement("#root");
export default function Congratulations(props) {
	const { width, height } = useWindowSize();
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
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						top: "30%",
						left: "20%",
						right: "20%",
						bottom: "30%",
						height: "20%",
						width: "auto",
						background: "purple",
						overflow: "auto",
						borderRadius: "10px",
						border: "solid 5px gold",
						outline: "none",
						padding: "20px",
						textDecorationColor: "white",
					},
				}}
				isOpen={props.open}
			>
				<h1 style={{ color: "whitesmoke" }}>
					🥳 Congratulations you have won🎉
				</h1>
			</Modal>
		</div>
	);
}

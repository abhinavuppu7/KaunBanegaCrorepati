import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
Modal.setAppElement("#root");
export default function Disclaimer(props) {
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
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						top: "30%",
						left: "20%",
						right: "20%",
						bottom: "30%",
						height: "auto",
						width: "auto",
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
				<img
					style={{
						width: "",
						height: "40%",
					}}
					src={
						"https://icones.pro/wp-content/uploads/2021/05/symbole-d-avertissement-jaune.png"
					}
					alt="exclamaition mark"
				/>
				<div
					style={{
						color: "whitesmoke",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h3>
						This is game is developed for educational purposes .Monetary prizes
						are not awarded for winnining or loosing the game
					</h3>
				</div>

				<Link className="btn btn-warning" to="/gamepage" onClick={Continue}>
					<b>Continue Game</b>
				</Link>
			</Modal>
		</div>
	);
}

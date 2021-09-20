import React from "react";
export default function LevelComponent(props) {
	return (
		<button
			style={{
				width: props.qlevel + 1 === props.stage ? "250px" : "200px",
				backgroundColor: props.qlevel + 1 === props.stage ? "" : "purple",
				border: "3px solid gold",
			}}
			type="button"
			color="purple"
			class={
				props.qlevel + 1 === props.stage ? "btn btn-success" : "btn btn-primary"
			}
		>
			{props.money}
		</button>
	);
}

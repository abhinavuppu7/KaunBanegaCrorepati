import React from "react";
export default function Lifelinecomponent(props) {
	return (
		<button
			style={{
				width: "150px",
				height: "100px",
				marginBottom: "20px",
				opacity: props.lifelineoption === 0 ? "0.5" : 1,
				borderRadius: "50% 50% 50% 50% / 49% 50% 50% 50%",
				backgroundColor: "purple",
				border: "3px solid gold",
			}}
			type="button"
			className="btn btn-primary "
			onClick={props.handlelifeline}
		>
			<img style={{ height: props.imgheight }} src={props.src} />
		</button>
	);
}

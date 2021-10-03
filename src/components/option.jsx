import React from "react";
export default function Optioncomponent(props) {
	return (
		<button
			style={{
				width: "350px",
				height: "40px",

				marginTop: "1%",
				marginBottom: "0.5%",
			}}
			type="button"
			class={props.appliedclass}
			value={props.optionvalue}
			onClick={props.handleclick}
		>
			{props.presentOption || props.optionvalue}
		</button>
	);
}

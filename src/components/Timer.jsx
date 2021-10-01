import React, { useEffect, useState } from "react";
export default function Timer(props) {
	const [t, Settime] = useState(30);
	useEffect(() => {
		Settime(30);
	}, [props.level]);
	useEffect(() => {
		if (!props.stop && t >= 1)
			var timer = setTimeout(() => {
				decrement();
			}, 1000);
		else {
			if (t == 0) {
				props.timecomplete();
			}
		}
	}, [t, props.stop]);
	function decrement() {
		Settime(t - 1);
	}
	return (
		<div
			style={{
				backgroundColor: "white",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",

				borderRadius: "150px 150px 0% 0%",
				width: "100px",
				top: "50%",
				left: "50%",
				height: "50px",
				backgroundColor: "purple",
				border: "2px solid gold",

				alignSelf: "center",
				// transform: "translate(-50%,-50%)",
			}}
		>
			<h1
				style={{
					alignSelf: "center",
					color: "white",
				}}
			>
				{t}
			</h1>
		</div>
	);
}

import React, { useEffect, useState } from "react";
import tiktok from "../audio/ticktock.mp3";
import wrong from "../audio/wrong answer.mp3";
import correct from "../audio/correct.mp3";
import claps from "../audio/clapping.mp3";
export default function Timer(props) {
	const [t, Settime] = useState(30);

	useEffect(() => {
		Settime(30);
	}, [props.level]);
	console.log(props.level);
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
			<audio loop="true" muted={props.stop || t === 0} autoPlay={!props.stop}>
				<source src={tiktok} />
			</audio>
			{(props.wrong || props.loose) && (
				<audio autoPlay={props.wrong}>
					<source src={wrong} />
				</audio>
			)}
			{props.correct && (
				<audio loop="true" autoPlay="true">
					<source src={correct} />
				</audio>
			)}
			{props.won && (
				<audio loop="true" autoPlay="true">
					<source src={claps} />
				</audio>
			)}
		</div>
	);
}

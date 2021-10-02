import React from "react";
import "../styles/gamepageelements.css";
export default function Currentremainder(props) {
	let level = [
		{
			stage: 12,
			money: "1 Crore",
		},
		{
			stage: 11,
			money: "₹2500000",
		},
		{
			stage: 10,
			money: "₹1250000",
		},
		{
			stage: 9,
			money: "₹640000",
		},
		{
			stage: 8,
			money: "₹320000",
		},
		{
			stage: 7,
			money: "₹80000",
		},
		{
			stage: 6,
			money: "₹40000",
		},
		{
			stage: 5,
			money: "₹20000",
		},
		{
			stage: 4,
			money: "₹10000",
		},
		{
			stage: 3,
			money: "₹5000",
		},
		{
			stage: 2,
			money: "₹2500",
		},
		{
			stage: 1,
			money: "₹100",
		},
	];
	return (
		<div className="levelup">
			<h1>Question:{props.qlevel + 1}</h1>
			{/* <h1>Money:{level[12 - props.qlevel].money}</h1> */}
			{/* <h1>Money:{level[props.qlevel].money}</h1> */}
		</div>
	);
}

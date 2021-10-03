import React, { useEffect, useState } from "react";
import Disclaimer from "./Disclaimer";
import "../styles/landingpage.css";

export default function Landing() {
	const [disclaimer, setdisclaimer] = useState(false);
	async function close() {
		setdisclaimer(!disclaimer);
	}
	async function opendisc() {
		setdisclaimer(!disclaimer);
	}

	return (
		<div
			className="backside"
			style={{
				backgroundImage: `url(
					"https://origin-staticv2.sonyliv.com/landscape_thumb/kbc2021_landscape_thumb.jpg"
				)`,
			}}
		>
			<Disclaimer open={disclaimer} close={close} />
			<button
				style={{
					height: "20%",
					width: "inherit",
				}}
				type="button"
				class="btn btn-warning"
				onClick={opendisc}
			>
				<h1>Play Now</h1>
			</button>
		</div>
	);
}

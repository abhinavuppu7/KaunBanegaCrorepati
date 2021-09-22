import React, { useState } from "react";
import Disclaimer from "./Disclaimer";

export default function Landing() {
	const [disclaimer, setdisclaimer] = useState(true);
	async function close() {
		setdisclaimer(!disclaimer);
	}
	return (
		<div
			style={{
				backgroundImage: `url(
					"https://origin-staticv2.sonyliv.com/landscape_thumb/kbc2021_landscape_thumb.jpg"
				)`,
				backgroundRepeat: "no-repeat",
				minHeight: "100vh",
				backgroundSize: "cover",

				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{" "}
			<Disclaimer open={disclaimer} close={close} />
			<button
				style={{
					height: "60px",
					width: "300px",
				}}
				type="button"
				class="btn btn-warning"
			>
				<h1
					style={{
						color: "purple",
						borderBlockColor: "solid 3px black",
						fontWeight: "800",
					}}
				>
					Play Now
				</h1>
			</button>
		</div>
	);
}

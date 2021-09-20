import React from "react";

export default function Landing() {
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
			<div>
				<button type="button" class="btn btn-warning">
					Play Now
				</button>
			</div>
		</div>
	);
}

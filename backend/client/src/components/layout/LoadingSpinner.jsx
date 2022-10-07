import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingSpinner() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				justifyContent: "center",
				position: "relative",
			}}
		>
			<CircularProgress
				style={{ top: "20%", right: "45%", position: "absolute" }}
				disableShrink
			/>
		</div>
	);
}

export default LoadingSpinner;

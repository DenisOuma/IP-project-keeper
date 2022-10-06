import React from "react";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import AlertContext from "../../context/alert/alertContext";

function AlertMessage() {
	const alertContext = React.useContext(AlertContext);
	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<div key={alert.id} className={`alert alert-${alert.type}`}>
				<ErrorOutlineRoundedIcon fontSize="small" /> {alert.msg}
			</div>
		))
	);
}

export default AlertMessage;

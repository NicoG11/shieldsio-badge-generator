import React from "react";

const Step1: React.FC = () => {
	return (
		<>
			<div className="card-header">
				badgeContent — <span className="fw-bold text-danger">REQUIRED</span>
			</div>
			<div className="card-body">
				<div>
					Label, (optional) message, and color. Separated by dashes Example:
					build-passing-brightgreen
				</div>
			</div>
		</>
	);
};

export default Step1;

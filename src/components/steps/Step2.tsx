import React from "react";
import UnderConstruction from "../UnderConstruction";

const Step2: React.FC = () => {
	return (
		<>
			<div className="card-header">style</div>
			<div className="card-body">
				If not specified, the default style for this badge is "flat".
				<div>flat, flat-square, plastic, for-the-badge, social</div>
				select for options
				<UnderConstruction />
			</div>
		</>
	);
};

export default Step2;

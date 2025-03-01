import React from "react";
import { useStepper } from "../../contexts/StepperContext";

const styles = ["flat", "flat-square", "plastic", "for-the-badge", "social"];

const Step2: React.FC = () => {
	const { style, setStyle } = useStepper();

	const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStyle(e.target.value);
	};

	return (
		<>
			<div className="card-header">style</div>
			<div className="card-body">
				If not specified, the default style for this badge is "flat".
				<div>flat, flat-square, plastic, for-the-badge, social</div>
				select for options
				<select
					className="form-select form-select-lg mb-3"
					aria-label="Badgestyle"
					onChange={handleStyleChange}
					value={style}
				>
					{styles.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default Step2;

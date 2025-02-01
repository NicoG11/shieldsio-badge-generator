import React from "react";
import { useStepper } from "../../contexts/StepperContext";

const Step1: React.FC = () => {
	const { badgeContent, setBadgeContent, setCurrentStep, currentStep } =
		useStepper();

	return (
		<>
			<div className="card-header">
				badgeContent — <span className="fw-bold text-danger">REQUIRED</span>
			</div>
			<div className="card-body">
				<div className="step-description">
					<ul>
						<li>
							<span>Start:</span> Label
						</li>
						<li>
							<span>Middle: (optional)</span> message
						</li>
						<li>
							<span>End:</span> color
						</li>
					</ul>
					<div className="example">
						<span>Example:</span> <code>example-Preview-blue</code>
					</div>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="addYourLabel-withMEssage-andColor"
						value={badgeContent}
						onChange={(e) => setBadgeContent(e.target.value)}
					/>
					<label htmlFor="floatingInput">badgeContent</label>
				</div>
			</div>
			<div className="card-footer d-flex justify-content-end">
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => setCurrentStep(currentStep + 1)}
					disabled={!badgeContent}
				>
					Weiter
				</button>
			</div>
		</>
	);
};

export default Step1;

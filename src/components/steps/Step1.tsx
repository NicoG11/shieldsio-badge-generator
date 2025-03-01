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
					<p>
						Here you can define the content of the badge. The badge content is
						constructed as follows:
					</p>
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
					<p>Special characters are replaced as follows:</p>
					<ul>
						<li>
							<span>
								Underscore <code>_</code> or <code>%20</code> becomes:
							</span>{" "}
							Space
						</li>
						<li>
							<span>
								Double underscore <code>__</code> becomes:
							</span>{" "}
							Single Underscore _
						</li>
						<li>
							<span>
								Double dash <code>--</code>:
							</span>{" "}
							Dash -
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

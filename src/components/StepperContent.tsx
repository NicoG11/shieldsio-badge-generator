import React from "react";
import { useStepper } from "../contexts/StepperContext";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";

const stepComponents = [
	<Step1 key="step1" />,
	<Step2 key="step2" />,
	"Gib deine Daten ein.",
	"Überprüfe deine Eingaben.",
	"Alles erledigt! 🎉",
];

const StepContent: React.FC = () => {
	const { currentStep } = useStepper();

	return (
		<div className="stepContent">
			{/* hier dann die einzelnen steps componenten */}
			{stepComponents[currentStep]}
		</div>
	);
};

export default StepContent;

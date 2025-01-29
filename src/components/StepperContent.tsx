import React from "react";
import { useStepper } from "../contexts/StepperContext";

const stepContents = [
	"Willkommen! Klicke auf einen Schritt.",
	"Hier kannst du etwas konfigurieren.",
	"Gib deine Daten ein.",
	"Überprüfe deine Eingaben.",
	"Alles erledigt! 🎉",
];

const StepContent: React.FC = () => {
	const { currentStep } = useStepper();

	return (
		<div className="stepContent">
			{/* hier dann die einzelnen steps componenten */}
			<div className="card-header">{stepContents[currentStep]}</div>
		</div>
	);
};

export default StepContent;

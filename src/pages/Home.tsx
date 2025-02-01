import type React from "react";
import Hero from "../components/Hero";

import Stepper from "../components/Stepper";
import { StepperProvider } from "../contexts/StepperContext";
import StepContent from "../components/StepperContent";
import BadgePreview from "../components/BadgePreview";

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<StepperProvider>
				<div className="stepperWrapper">
					<Stepper />
					<StepContent />
				</div>
				<BadgePreview />
			</StepperProvider>
		</>
	);
};

export default Home;

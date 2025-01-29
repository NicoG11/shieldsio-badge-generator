import type React from "react";
import Hero from "../components/Hero";
import UnderConstruction from "../components/UnderConstruction";
import Stepper from "../components/Stepper";
import { StepperProvider } from "../contexts/StepperContext";
import StepContent from "../components/StepperContent";

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<StepperProvider>
				<div className="stepperWrapper">
					<Stepper />
					<StepContent />
				</div>
			</StepperProvider>
			{/* <UnderConstruction /> */}
		</>
	);
};

export default Home;

import React, { createContext, useContext, useState, ReactNode } from "react";

type StepperContextType = {
	currentStep: number;
	setCurrentStep: (step: number) => void;
};

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<StepperContext.Provider value={{ currentStep, setCurrentStep }}>
			{children}
		</StepperContext.Provider>
	);
};

export const useStepper = () => {
	const context = useContext(StepperContext);
	if (!context) {
		throw new Error("useStepper must be used within a StepperProvider");
	}
	return context;
};

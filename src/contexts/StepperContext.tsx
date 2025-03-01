import React, { createContext, useContext, useState, ReactNode } from "react";

type StepperContextType = {
	currentStep: number;
	setCurrentStep: (step: number) => void;
	badgeContent: string;
	setBadgeContent: (content: string) => void;
	style: string;
	setStyle: (style: string) => void;
	logo: string;
	setLogo: (logo: string) => void;
	logoColor: string;
	setLogoColor: (color: string) => void;
};

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [badgeContent, setBadgeContent] = useState("example-Preview-blue");
	const [style, setStyle] = useState("flat");
	const [logo, setLogo] = useState("");
	const [logoColor, setLogoColor] = useState("");

	const value = {
		currentStep,
		setCurrentStep,
		badgeContent,
		setBadgeContent,
		style,
		setStyle,
		logo,
		setLogo,
		logoColor,
		setLogoColor,
	};

	return (
		<StepperContext.Provider value={value}>{children}</StepperContext.Provider>
	);
};

export const useStepper = () => {
	const context = useContext(StepperContext);
	if (!context) {
		throw new Error("useStepper must be used within a StepperProvider");
	}
	return context;
};

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
	logoSize: string;
	setLogoSize: (size: string) => void;
	label: string;
	setLabel: (label: string) => void;
	labelColor: string;
	setLabelColor: (color: string) => void;
	color: string;
	setColor: (color: string) => void;
	cacheSeconds: string;
	setCacheSeconds: (seconds: string) => void;
	link: string;
	setLink: (link: string) => void;
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
	const [logoSize, setLogoSize] = useState("");
	const [label, setLabel] = useState("");
	const [labelColor, setLabelColor] = useState("");
	const [color, setColor] = useState("");
	const [cacheSeconds, setCacheSeconds] = useState("");
	const [link, setLink] = useState("");

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
		logoSize,
		setLogoSize,
		label,
		setLabel,
		labelColor,
		setLabelColor,
		color,
		setColor,
		cacheSeconds,
		setCacheSeconds,
		link,
		setLink,
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

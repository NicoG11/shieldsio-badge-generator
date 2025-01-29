import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { useStepper } from "../contexts/StepperContext";

const steps = [
	{ id: 0, title: "badgeContent" },
	{ id: 1, title: "style" },
	{ id: 2, title: "logo" },
	{ id: 3, title: "logoColor" },
	{ id: 4, title: "logoSize" },
	{ id: 5, title: "label" },
	{ id: 6, title: "labelColor" },
	{ id: 7, title: "color" },
	{ id: 8, title: "cacheSeconds" },
	{ id: 9, title: "link" },
];

const Stepper: React.FC = () => {
	const { currentStep, setCurrentStep } = useStepper();
	const [hoverStep, setHoverStep] = useState<number | null>(null);

	const stepsRef = useRef<HTMLDivElement>(null);
	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

	const handleStepClick = (index: number) => {
		setCurrentStep(index);

		// Wenn die Steps-Ref existiert und das Element sichtbar ist, scrollen
		if (stepRefs.current[index] && stepsRef.current) {
			stepRefs.current[index]?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}
	};

	return (
		<div ref={stepsRef} className="steps">
			{steps.map((step) => (
				<div
					key={step.id}
					className="step"
					ref={(el) => {
						if (el) stepRefs.current[step.id] = el;
					}}
				>
					{step.id !== 0 && (
						<motion.div
							className={`line ${step.id <= currentStep ? "active" : ""}`}
							animate={{
								backgroundColor: step.id <= currentStep ? "#0284c7" : "#6c757d",
							}}
						/>
					)}

					<motion.div
						className={`point ${step.id <= currentStep ? "active" : ""}`}
						whileHover={{ scale: 1.1 }}
						animate={{ scale: step.id === currentStep ? 1.1 : 1 }}
						onMouseEnter={() => setHoverStep(step.id)}
						onMouseLeave={() => setHoverStep(null)}
						onClick={() => handleStepClick(step.id)}
					>
						{(step.id === currentStep || step.id === hoverStep) && (
							<motion.span
								className={`title ${step.id <= currentStep ? "active" : ""}`}
								animate={{ opacity: 1, y: [-5, 0] }}
							>
								{step.title}
							</motion.span>
						)}
					</motion.div>
				</div>
			))}
		</div>
	);
};

export default Stepper;

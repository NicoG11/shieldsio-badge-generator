import type React from "react";
import { motion } from "motion/react";

const UnderConstruction: React.FC = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "283px",
			}}
		>
			<motion.div
				style={{
					fontSize: "3rem",
					fontWeight: "bold",
					color: "#f39c12",
					textShadow: "0 0 10px #f39c12, 0 0 20px #f1c40f",
				}}
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 5, -5, 0],
					opacity: [1, 0.8, 1],
					x: [0, 5, -5, 0],
				}}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			>
				🚧 Under Construction 🚧
			</motion.div>
		</div>
	);
};

export default UnderConstruction;

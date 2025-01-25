import { motion } from "motion/react";
import type React from "react";

const Hero: React.FC = () => {
	return (
		<motion.div
			initial={{ transform: "translateX(-200px)" }}
			animate={{ transform: "translateX(0px)" }}
			transition={{ type: "spring" }}
			className="hero"
		>
			Mit dieser App kannst du ganz einfach deine eigenen{" "}
			<strong>Shields.io-Badges</strong> erstellen!
			<br />
			Wähle Label, Text und Farbe aus, passe das Design an, und kopiere den
			generierten Code, um ihn direkt in deine Website oder README-Datei
			einzufügen.
		</motion.div>
	);
};

export default Hero;

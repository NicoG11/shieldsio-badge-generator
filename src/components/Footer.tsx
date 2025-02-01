import { motion } from "motion/react";
import type React from "react";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="container">
				<p>
					Created with{" "}
					<motion.span
						animate={{
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: 2,
							ease: "easeInOut",
							times: [0, 0.5, 1],
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: 1,
						}}
						role="img"
						aria-label="love"
						title="love"
						style={{ display: "inline-block" }}
					>
						❤️
					</motion.span>{" "}
					by <a href="https://github.com/NicoG11">NicoG11</a>
				</p>
				<p className="mb-0">{currentYear}</p>
			</div>
		</footer>
	);
};

export default Footer;

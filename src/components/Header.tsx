import type React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const badgeUrl: string =
	"https://img.shields.io/badge/shields.io-Badge%20Generator-blue?style=flat";

const Header: React.FC = () => {
	const { scrollY } = useScroll();

	const headerHeight = useTransform(scrollY, [0, 150], ["200px", "65px"]);
	const headerPadding = useTransform(
		scrollY,
		[0, 150],
		["2rem 1rem", "1rem 0.5rem"],
	);

	const h1Size = useTransform(scrollY, [0, 150], ["3rem;", "1.5rem"]);
	const h1PositionX = useTransform(scrollY, [0, 150], ["0", "-25%"]);

	const imgHeight = useTransform(scrollY, [0, 150], ["2.25rem", "1.5rem"]);
	const imgPositionX = useTransform(scrollY, [0, 150], ["0", "100%"]);
	const imgPositionY = useTransform(scrollY, [0, 150], ["0", "-60px"]);

	return (
		<motion.header
			style={{
				height: headerHeight,
				padding: headerPadding,
			}}
		>
			<motion.h1 style={{ fontSize: h1Size, x: h1PositionX }}>
				<span>Shields.io</span> Badge Generator
			</motion.h1>
			<motion.img
				style={{ x: imgPositionX, y: imgPositionY, height: imgHeight }}
				src={badgeUrl}
				alt="Shields.io Badge"
			/>
		</motion.header>
	);
};

export default Header;

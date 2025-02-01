import type React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const badgeUrl: string =
	"https://img.shields.io/badge/shields.io-Badge%20Generator-blue?style=flat";

const Header: React.FC = () => {
	const { scrollY } = useScroll();

	const screenWidth = window.innerWidth;
	const isSmallScreen = screenWidth <= 768;

	const headerHeight = !isSmallScreen
		? useTransform(scrollY, [0, 150], ["200px", "65px"])
		: useTransform(scrollY, [0, 150], ["200px", "52px"]);
	const headerPadding = useTransform(
		scrollY,
		[0, 150],
		["2rem 1rem", "1rem 0.5rem"],
	);

	const h1Size = !isSmallScreen
		? useTransform(scrollY, [0, 140], ["3rem", "1.5rem"])
		: useTransform(scrollY, [0, 140], ["2rem", "1rem"]);

	const h1PositionX = !isSmallScreen
		? useTransform(scrollY, [0, 140], ["0", "-25%"])
		: useTransform(scrollY, [0, 140], ["0", "-20%"]);

	const imgHeight = !isSmallScreen
		? useTransform(scrollY, [0, 140], ["2.25rem", "1.5rem"])
		: useTransform(scrollY, [0, 140], ["1.5rem", "1rem"]);

	const imgPositionX = !isSmallScreen
		? useTransform(scrollY, [0, 140], ["0", "125%"])
		: useTransform(scrollY, [0, 140], ["0", "85%"]);

	const imgPositionY = !isSmallScreen
		? useTransform(scrollY, [0, 140], ["0", "-62px"])
		: useTransform(scrollY, [0, 140], ["0", "-55px"]);

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

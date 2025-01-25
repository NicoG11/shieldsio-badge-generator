import type React from "react";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="container">
				<p>
					Created with ❤️ by <a href="https://github.com/NicoG11">NicoG11</a>
				</p>
				<p className="mb-0">{currentYear}</p>
			</div>
		</footer>
	);
};

export default Footer;

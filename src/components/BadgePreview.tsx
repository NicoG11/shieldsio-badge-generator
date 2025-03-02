import React, { useState } from "react";
import { useStepper } from "../contexts/StepperContext";

interface BadgeType {
	id: number;
	type: "url" | "md" | "html";
	title: string;
}

const types: BadgeType[] = [
	{ id: 0, type: "url", title: "Badge URL:" },
	{ id: 1, type: "md", title: "Markdown:" },
	{ id: 2, type: "html", title: "HTML:" },
];

const BadgePreview: React.FC = () => {
	const {
		badgeContent,
		style,
		logo,
		logoColor,
		logoSize,
		label,
		labelColor,
		color,
	} = useStepper();

	const [copied, setCopied] = useState<string | null>(null);

	const copyToClipboard = (text: string, type: string) => {
		navigator?.clipboard?.writeText(text).then(() => {
			setCopied(type);
			setTimeout(() => setCopied(null), 1500);
		});
	};

	let badgeUrl = badgeContent
		? `https://img.shields.io/badge/${badgeContent.replace(/\s+/g, "_")}`
		: "https://img.shields.io/badge/example-Preview-blue";

	const queryParams = new URLSearchParams();
	if (style) {
		queryParams.set("style", style);
	}

	if (logo !== "") {
		queryParams.set("logo", logo);
	}

	if (logoColor !== "") {
		queryParams.set("logoColor", logoColor);
	}

	if (logoSize !== "") {
		queryParams.set("logoSize", logoSize);
	}

	if (label !== "") {
		queryParams.set("label", label);
	}

	if (labelColor !== "") {
		queryParams.set("labelColor", labelColor);
	}

	if (color !== "") {
		queryParams.set("color", color);
	}

	if (queryParams.toString()) {
		badgeUrl += `?${queryParams.toString()}`;
	}

	return (
		<div className="badge-preview">
			<h5>Vorschau:</h5>
			<img src={badgeUrl} alt="Badge Preview" />

			{types.map((t) => (
				<PreviewSection
					key={t.id}
					type={t.type}
					copied={copied}
					copyToClipboard={copyToClipboard}
					badgeUrl={badgeUrl}
				/>
			))}
		</div>
	);
};

export default BadgePreview;

interface PreviewSectionProps {
	type: "url" | "md" | "html"; // Nur erlaubte Werte
	copied: string | null;
	copyToClipboard: (text: string, type: string) => void;
	badgeUrl: string;
}
const PreviewSection = (props: PreviewSectionProps) => {
	// Dynamischer Code für die verschiedenen Typen
	const codeSnippets: Record<string, string> = {
		url: props.badgeUrl,
		md: `![Static Badge](${props.badgeUrl})`,
		html: `<img src="${props.badgeUrl}" alt="Static Badge" />`,
	};

	return (
		<>
			<h5>
				{types.find((t) => t.type === props.type)?.title}

				{props.copied === props.type ? (
					<span className="copied">✔️ Kopiert!</span>
				) : (
					<button
						type="button"
						className="copyBtn"
						onClick={() =>
							props.copyToClipboard(codeSnippets[props.type], props.type)
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="#5f6368"
							className="copyIcon"
							aria-labelledby="copyIconTitle"
							role="img"
						>
							<title id="copyIconTitle">Kopieren</title>
							<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
						</svg>
					</button>
				)}
			</h5>

			<code>{codeSnippets[props.type]}</code>
		</>
	);
};

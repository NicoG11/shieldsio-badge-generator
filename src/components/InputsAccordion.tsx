import Accordion from "react-bootstrap/Accordion";
import { useStepper } from "../contexts/StepperContext";
import IconSelect from "./IconSelect";
import { Sketch } from "@uiw/react-color";
import { useEffect, useRef, useState } from "react";

const InputsAccordion = () => {
	return (
		<Accordion defaultActiveKey={["0"]} alwaysOpen>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					badgeContent — <span className="fw-bold text-danger">REQUIRED</span>
				</Accordion.Header>
				<Accordion.Body>
					<Step1 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>style</Accordion.Header>
				<Accordion.Body>
					<Step2 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header>Logo</Accordion.Header>
				<Accordion.Body>
					<Step3 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header>Logo Color</Accordion.Header>
				<Accordion.Body>
					<Step4 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="4">
				<Accordion.Header>Logo Size</Accordion.Header>
				<Accordion.Body>
					<Step5 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="5">
				<Accordion.Header>Left Hand Label</Accordion.Header>
				<Accordion.Body>
					<Step6 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="6">
				<Accordion.Header>Left Hand Badge Color</Accordion.Header>
				<Accordion.Body>
					<Step7 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="7">
				<Accordion.Header>Right Hand Badge Color</Accordion.Header>
				<Accordion.Body>
					<Step8 />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="8">
				<Accordion.Header>Cache Seconds</Accordion.Header>
				<Accordion.Body>
					<Step9 />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default InputsAccordion;

// Badge Content
const Step1 = () => {
	const { badgeContent, setBadgeContent } = useStepper();
	return (
		<>
			<div className="step-description">
				<p>
					Here you can define the content of the badge. The badge content is
					constructed as follows:
				</p>
				<ul>
					<li>
						<span>Start:</span> Label
					</li>
					<li>
						<span>Middle: (optional)</span> message
					</li>
					<li>
						<span>End:</span> color
					</li>
				</ul>
				<p>Special characters are replaced as follows:</p>
				<ul>
					<li>
						<span>
							Underscore <code>_</code> or <code>%20</code> becomes:
						</span>{" "}
						Space
					</li>
					<li>
						<span>
							Double underscore <code>__</code> becomes:
						</span>{" "}
						Single Underscore _
					</li>
					<li>
						<span>
							Double dash <code>--</code>:
						</span>{" "}
						Dash -
					</li>
				</ul>

				<div className="example">
					<span>Example:</span> <code>example-Preview-blue</code>
				</div>
			</div>

			<div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="addYourLabel-withMEssage-andColor"
					value={badgeContent}
					onChange={(e) => setBadgeContent(e.target.value)}
				/>
				<label htmlFor="floatingInput">badgeContent</label>
			</div>
		</>
	);
};

// Style
const styles = ["flat", "flat-square", "plastic", "for-the-badge", "social"];

const Step2 = () => {
	const { style, setStyle } = useStepper();

	return (
		<>
			<div className="card-header">style</div>
			<div className="card-body">
				If not specified, the default style for this badge is "flat".
				<div>flat, flat-square, plastic, for-the-badge, social</div>
				select for options
				<select
					className="form-select form-select-lg mb-3"
					aria-label="Badgestyle"
					onChange={(e) => setStyle(e.target.value)}
					value={style}
				>
					{styles.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

// logo
const Step3 = () => {
	const { setLogo } = useStepper();
	return (
		<>
			<div className="step-description">
				<p>
					Icon slug from simple-icons.
					<br />
					You can click the icon title on{" "}
					<a href="https://simpleicons.org/" target="_blank" rel="noreferrer">
						simple-icons
					</a>{" "}
					to copy the slug or they can be found in the slugs.md file in the
					<a
						href="https://github.com/simple-icons/simple-icons/blob/master/slugs.md"
						target="_blank"
						rel="noreferrer"
					>
						simple-icons repository.
					</a>
					<br />
					Read more at{" "}
					<a
						href="https://shields.io/docs/logos"
						target="_blank"
						rel="noreferrer"
					>
						https://shields.io/docs/logos
					</a>
				</p>
			</div>

			<div className="form-floating mb-3">
				<IconSelect onChange={setLogo} />
			</div>
			<div>TODO: custom LOGO</div>
		</>
	);
};

// logoColor
const Step4 = () => {
	const { logoColor, setLogoColor } = useStepper();
	const [showPicker, setShowPicker] = useState(false);
	const pickerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				pickerRef.current &&
				!pickerRef.current.contains(event.target as Node) &&
				!inputRef.current?.contains(event.target as Node)
			) {
				setShowPicker(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return (
		<>
			<div className="step-description">
				<p>
					The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors
					supported). Supported for simple-icons logos but not for custom logos.
				</p>
			</div>

			<div className="color-picker-container">
				<div className="input-group mb-3">
					<input
						ref={inputRef}
						type="text"
						className="form-control"
						placeholder="Enter color (e.g. #FF0000 or red)"
						value={logoColor}
						onChange={(e) => setLogoColor(e.target.value)}
						onClick={() => setShowPicker(true)}
					/>
					<div
						className="input-group-text"
						style={{
							backgroundColor: logoColor,
							width: "40px",
							cursor: "pointer",
						}}
						onClick={() => setShowPicker(!showPicker)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setShowPicker(!showPicker);
							}
						}}
						role="button"
						tabIndex={0}
					/>
				</div>

				{showPicker && (
					<div ref={pickerRef} className="color-picker-popup">
						<Sketch
							style={{ width: "200px" }}
							color={logoColor}
							onChange={(color) => setLogoColor(color.hex)}
						/>
					</div>
				)}
			</div>
		</>
	);
};

// logo size
const Step5 = () => {
	const { logoSize, setLogoSize } = useStepper();
	return (
		<>
			<div className="step-description">
				<p>
					Make icons adaptively resize by setting auto. Useful for some wider
					logos like amd and amg. Supported for simple-icons logos but not for
					custom logos.
				</p>

				<div className="example">
					<span>Example:</span> <code>auto</code>
				</div>
			</div>
			<div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="Make icons adaptively resize by setting auto"
					value={logoSize}
					onChange={(e) => setLogoSize(e.target.value)}
				/>
				<label htmlFor="floatingInput">logo size</label>
			</div>
		</>
	);
};

// left hand label
const Step6 = () => {
	const { label, setLabel } = useStepper();
	return (
		<>
			<div className="step-description">
				<p>
					Override the default left-hand-side text (
					<a
						href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"
						target="_blank"
						rel="noreferrer"
					>
						URL-Encoding
					</a>{" "}
					needed for spaces or special characters!)
				</p>

				<div className="example">
					<span>Example:</span> <code>healthiness</code>
				</div>
			</div>
			<div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="Override the default left-hand-side text"
					value={label}
					onChange={(e) => setLabel(e.target.value)}
				/>
				<label htmlFor="floatingInput">label</label>
			</div>
		</>
	);
};

// left hand label color
const Step7 = () => {
	const { labelColor, setLabelColor } = useStepper();
	const [showPicker, setShowPicker] = useState(false);
	const pickerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				pickerRef.current &&
				!pickerRef.current.contains(event.target as Node) &&
				!inputRef.current?.contains(event.target as Node)
			) {
				setShowPicker(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return (
		<>
			<div className="step-description">
				<p>
					Background color of the left part (hex, rgb, rgba, hsl, hsla and css
					named colors supported).
				</p>
			</div>

			<div className="color-picker-container">
				<div className="input-group mb-3">
					<input
						ref={inputRef}
						type="text"
						className="form-control"
						placeholder="Enter color (e.g. #FF0000 or red)"
						value={labelColor}
						onChange={(e) => setLabelColor(e.target.value)}
						onClick={() => setShowPicker(true)}
					/>
					<div
						className="input-group-text"
						style={{
							backgroundColor: labelColor,
							width: "40px",
							cursor: "pointer",
						}}
						onClick={() => setShowPicker(!showPicker)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setShowPicker(!showPicker);
							}
						}}
						role="button"
						tabIndex={0}
					/>
				</div>

				{showPicker && (
					<div ref={pickerRef} className="color-picker-popup">
						<Sketch
							style={{ width: "200px" }}
							color={labelColor}
							onChange={(color) => setLabelColor(color.hex)}
						/>
					</div>
				)}
			</div>
		</>
	);
};

// right hand color
const Step8 = () => {
	const { color, setColor } = useStepper();
	const [showPicker, setShowPicker] = useState(false);
	const pickerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				pickerRef.current &&
				!pickerRef.current.contains(event.target as Node) &&
				!inputRef.current?.contains(event.target as Node)
			) {
				setShowPicker(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return (
		<>
			<div className="step-description">
				<p>
					Background color of the right part (hex, rgb, rgba, hsl, hsla and css
					named colors supported).
				</p>
			</div>

			<div className="color-picker-container">
				<div className="input-group mb-3">
					<input
						ref={inputRef}
						type="text"
						className="form-control"
						placeholder="Enter color (e.g. #FF0000 or red)"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						onClick={() => setShowPicker(true)}
					/>
					<div
						className="input-group-text"
						style={{
							backgroundColor: color,
							width: "40px",
							cursor: "pointer",
						}}
						onClick={() => setShowPicker(!showPicker)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setShowPicker(!showPicker);
							}
						}}
						role="button"
						tabIndex={0}
					/>
				</div>

				{showPicker && (
					<div ref={pickerRef} className="color-picker-popup">
						<Sketch
							style={{ width: "200px" }}
							color={color}
							onChange={(color) => setColor(color.hex)}
						/>
					</div>
				)}
			</div>
		</>
	);
};

// cacheSeconds
const Step9 = () => {
	const { cacheSeconds, setCacheSeconds } = useStepper();
	return (
		<>
			<div className="step-description">
				<p>
					HTTP cache lifetime (rules are applied to infer a default value on a
					per-badge basis, any values specified below the default will be
					ignored).
				</p>

				<div className="example">
					<span>Example:</span> <code>3600</code>
				</div>
			</div>
			<div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored)."
					value={cacheSeconds}
					onChange={(e) => setCacheSeconds(e.target.value)}
				/>
				<label htmlFor="floatingInput">cacheSeconds</label>
			</div>
		</>
	);
};

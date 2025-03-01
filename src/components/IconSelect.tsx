import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const IconSelect = ({ onChange }: { onChange: (value: string) => void }) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchIcons = async () => {
			try {
				const response = await axios.get(
					"https://raw.githubusercontent.com/simple-icons/simple-icons/master/slugs.md",
				);

				// console.log(response);

				const icons = response.data
					.split("\n")
					.filter((line: string) => line.includes("|")) // Filter lines containing table data
					.filter((line: string) => !line.includes("Brand name")) // Remove header row
					.filter((line: string) => !line.includes(":---")) // Remove separator row
					.map((line: string) => {
						const [brandName, brandSlug] = line
							.split("|")
							.filter((cell) => cell.trim())
							.map((cell) => cell.trim());

						return {
							value: brandSlug.replace(/`/g, ""),
							label: brandName.replace(/`/g, ""),
						};
					})
					.filter((icon) => icon.value && icon.label);

				setOptions(icons);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching icons:", error);
				setIsLoading(false);
			}
		};

		fetchIcons();
	}, []); // Empty dependency array for running once on mount

	return (
		<Select
			options={options}
			isLoading={isLoading}
			isClearable
			isSearchable
			placeholder="Search for an icon..."
			onChange={(selectedOption) => onChange(selectedOption?.value || "")}
			styles={{
				control: (base) => ({
					...base,
					minHeight: "38px",
					borderRadius: "0.375rem",
					borderColor: "#dee2e6",
				}),
			}}
		/>
	);
};

export default IconSelect;

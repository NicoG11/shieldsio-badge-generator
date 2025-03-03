import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

interface IconOption {
	value: string;
	label: string;
}

const IconSelect = ({ onChange }: { onChange: (value: string) => void }) => {
	const [options, setOptions] = useState<IconOption[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchIcons = async () => {
			try {
				const response = await axios.get(
					"https://raw.githubusercontent.com/simple-icons/simple-icons/master/slugs.md",
				);

				const icons: IconOption[] = response.data
					.split("\n")
					.filter((line: string) => line.includes("|"))
					.filter((line: string) => !line.includes("Brand name"))
					.filter((line: string) => !line.includes(":---"))
					.map((line: string) => {
						const [brandName, brandSlug] = line
							.split("|")
							.filter((cell: string) => cell.trim())
							.map((cell: string) => cell.trim());

						return {
							value: brandSlug.replace(/`/g, ""),
							label: brandName.replace(/`/g, ""),
						};
					})
					.filter((icon: IconOption) => icon.value && icon.label);

				setOptions(icons);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching icons:", error);
				setIsLoading(false);
			}
		};

		fetchIcons();
	}, []);

	return (
		<Select<IconOption>
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

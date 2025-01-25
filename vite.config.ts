import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	plugins: [react()],
	base: command === "build" ? "/shieldsio-badge-generator/" : "/",
	// build: {
	//   outDir: 'docs',
	// },
}));

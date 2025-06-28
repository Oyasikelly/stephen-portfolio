import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "hsl(210 72% 85%)",
				secondary: "hsl(220 34% 9%)",
				base: "hsl(223 29% 20%)",
				light: "hsl(0 0% 100%)",
				dimlight: "hsl(0 0% 90%)",
			},
		},
	},
	plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#C6E1F5",
				dark: "#0E0F11",
				light: "#ffffff",
				accent: "#ff5722",
				muted: "#f5f5f5",
			},
			fontSize: {
				h1: "2.75rem",
				h2: "2.25rem",
				h3: "1.75rem",
				h4: "1.25rem",
			},
			fontFamily: {
				heading: ["'Playfair Display'", "serif"],
				body: ["'Inter'", "sans-serif"],
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainbg: "#181818",
				pepino: "#4A7559",
				pepino2: "#7c9b87",
				secondbg: "#212121",
				thirdbg: "#a5a5a5",
				alwhite: "#f1f1f1",
				instagram: "#e4405f",
			}
		},
		screens: {
			"mmd": "720px"
		}
	},
	plugins: [],
}


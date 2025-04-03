/** @type {import('tailwindcss').Config} */

const config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "15px"
            },
            colors: {
                accent: "#FF8F9C",
                blackish: "#1b1b1b"
            }
        },
    },
    plugins: [],
};

export default config;
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/components/**/*.{ts,tsx}", "./app/routes/**/*.{ts,tsx}", "./app/root.tsx"],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#13293D",
                white: "#F6F4F3"
            }
        }
    },
    plugins: []
};

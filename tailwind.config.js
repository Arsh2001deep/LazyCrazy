/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/index.html"],
    theme: {
        extend: {
            screens: {
                "sm": "480px"
            }
        },
        fontFamily: {
            rubik: ['Rubik Doodle Shadow', 'sans - serif']
        }
    },
    plugins: [],
}
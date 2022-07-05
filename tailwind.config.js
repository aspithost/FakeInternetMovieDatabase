const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './index.html', 
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'fimdb': '#E6B91E'
            },
            fontFamily: {
                sans: [ 'Hind', ...defaultTheme.fontFamily.sans]
            },
            screens: {
                '3xl': '1920px'
            },
        },
    },
}
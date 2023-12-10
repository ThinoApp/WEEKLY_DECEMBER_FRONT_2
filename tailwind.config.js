/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                '2diff': '1fr 2fr',
            },
            flex: {
                2: '1.4 1.4 0%',
                small: '0.8 0.8 0%',
                xs: '0.5 0.5 0%',
            },
            screens: {
                mobile: '470px',
                xsmobile: '370px',
                xslarge: '900px',
            },
            //Background
            backgroundColor: {
                primary: '#1B3764',
                secondary: '#FFCA42',
                tertiary: '#F6F8FC',
                grayLight: '#B4C7E7',
                coolGray: '#969AA0',
                lightBlue: '#F4F8FF',
            },

            //Border
            borderColor: {
                primary: '#1B3764',
                secondary: '#FFCA42',
                tertiary: '#F6F8FC',
                grayLight: '#B4C7E7',
                coolGray: '#969AA0',
                lightBlue: '#F4F8FF',
            },

            //Font
            textColor: {
                primary: '#1B3764',
                secondary: '#FFCA42',
                tertiary: '#F6F8FC',
                grayLight: '#B4C7E7',
                coolGray: '#969AA0',
                lightBlue: '#F4F8FF',
            },
            fontFamily: {
                inter: ['Inter'],
                cardo: ['Cardo'],
            },

            //Shadow
            dropShadow: {
                btn: '0 3px 6px rgba(0,0,0,0.16)',
                card: '0 6px 24px rgba(0,0,0,0.23)',
            },
        },
    },
    plugins: [],
};

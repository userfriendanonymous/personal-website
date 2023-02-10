/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            cWhite: '#fff',
            cNone: 'transparent',
            cPrimary: '#191a2c',
            cSecondary: '#ff8f10',
            cLight: '#f7f7fb',
            cGrey: '#484958',
            cPurple: '#3300C5',
            cOrange: '#FF4F4F',
            cGreyTrans: 'rgba(39, 35, 82, 0.29)',
            cSuccess: '#00d061',
        },

        boxShadow: {
            card: '0px 0px 50px rgba(47, 46, 85, 0.38)'
        },

        height: {
        },

        screens: {
            sLg: '968px',
            sL: '815px',
            sM: '640px',
            sS: '615px',
        },

        extend: {},
    },
    plugins: [],
}

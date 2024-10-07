import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                bgColor: '#392504',
                bgLight: '#FFE6BE',
                bgMedium: '#FFC261', 
                bgDark: '#B3802F',   
                buttonYellow: '#F1BC1F',
                buttonBlue: '#1662A9',
                buttonGreen: '#16A927',   
                statsColor1: '#5EFF79', 
                notif: '#5EFF79',  
                statsColor2: '#0FC8EC',  
                statsFont: '#FFB45E',
                textColor: '#361f08',  
            }

        },
    },

    plugins: [forms],
};

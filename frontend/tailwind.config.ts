import {nextui} from '@nextui-org/react';
import type {Config} from "tailwindcss";


const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '1/7': '14%'
            },
            colors: {
                'primary': '#006FEE',
                'zinc-50': '#f4f4f5'
            },
            dropShadow: {
                'card-shadow': [
                    '0px 0px 15px 0px rgba(0, 0, 0, 0.03)',
                    '0px 2px 30px 0px rgba(0, 0, 0, 0.08)',
                    '0px 0px 1px 0px rgba(0, 0, 0, 0.3)'
                ]
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;

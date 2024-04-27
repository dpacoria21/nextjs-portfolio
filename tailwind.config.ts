import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary': {
                    '50': '#f0f7fe',
                    '100': '#dcedfd',
                    '200': '#c1e1fc',
                    '300': '#97cff9',
                    '400': '#65b5f5',
                    '500': '#4799f0',
                    '600': '#2c79e4',
                    '700': '#2363d2',
                    '800': '#2351aa',
                    '900': '#224786',
                    '950': '#192c52',
                },
            }
        },
    },
    plugins: [],
};
export default config;

import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  screens: {
    '3xl':'1920px'
  },
  extend: {},
};
export const darkMode = 'class';
export const plugins = [nextui()];
const { withPigment } = require('@pigment-css/nextjs-plugin');
const { defaultTheme } = require('@kt/pigmentcss/theme');

/** @type {import('next').NextConfig} */
module.exports = withPigment({
    reactStrictMode: true,
    swcMinify: true,
}, {
    theme: defaultTheme,
    transformLibraries: ['@kt/pigmentcss']
});

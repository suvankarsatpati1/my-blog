/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

const nextConfig = {
  "presets": ["next/babel"]
}


module.exports = withNextra(nextConfig)

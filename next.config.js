const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
})

module.exports = {
  ...withNextra(),
  assetPrefix: "/nextra-getstart",
  images: { unoptimized :true }
}
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
  distDir: 'docs',
})

module.exports = {
  ...withNextra(),
  images: { unoptimized :true }

}
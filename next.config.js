const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
  distDir: 'dist',
})
 
module.exports = withNextra()
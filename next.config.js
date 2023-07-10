const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
  distDir: 'docs',
  basePath: "/nextra-getstart"
})

module.exports = {
  ...withNextra(),
  images: { unoptimized :true }

}
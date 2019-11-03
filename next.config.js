const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
module.exports = withCSS(
  withImages(
    withSass({
      cssLoaderOptions: {
        url: false
      },
      onDemandEntries: {
        // on dev, since our pages are so expensive, lets keep them for 24 hours
        maxInactiveAge: 1000 * 60 * 60 * 24
      },
      webpack: config => {
        const newConfig = { ...config }
        newConfig.plugins = [
          ...config.plugins,
          new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
          })
        ]
        return newConfig
      }
    })
  )
)

/** @type {import('next').NextConfig} */

const hash = require('string-hash')

const { relative } = require('path')

const context = __dirname

const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
})

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ({ resource }) => [
        defaultLoaders.babel,
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true, // true outputs JSX tags
            svgo: {
              plugins: [
                {
                  cleanupIDs: {
                    // https://github.com/svg/svgo/issues/674#issuecomment-324193597
                    prefix: `svg${hash(relative(context, resource))}`,
                  },
                },
                { removeViewBox: false },
                { removeUnknownsAndDefaults: false },
              ],
            },
          },
        },
      ],
    })

    return config
  },
  publicRuntimeConfig: {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  },
}

module.exports = nextConfig

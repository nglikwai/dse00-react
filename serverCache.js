const express = require('express')

const nocache = require('nocache')

const server = express()

const R = require('ramda')

const disableCache = process.env.DISABLE_CACHE === 'true'

const cacheMapping = {
  // pages
  '/': {
    age: 5 * 60, // 5 min
  },
  '/article/:slug0/:slug1?/:slug2?/:slug3?': {
    age: 5 * 60,
  },
  '/articles': {
    age: 5 * 60,
  },
  '/privacy': {
    age: 30 * 60,
  },
  '/terms-and-conditions': {
    age: 30 * 60,
  },
  '/disclaimer': {
    age: 30 * 60,
  },
  '/about-us': {
    age: 30 * 60,
  },
  // sitemap config (for cronjob)
  '/sitemap-static.json': {
    age: 30 * 60,
  },
  // universal link | asset link
  '/apple-app-site-association': {
    age: 30 * 60,
  },
  '/.well-known/apple-app-site-association': {
    age: 30 * 60,
  },
  '/assetlinks.json': {
    age: 30 * 60,
  },
  '/.well-known/assetlinks.json': {
    age: 30 * 60,
  },
  // static txt
  '/robots.txt': {
    age: 30 * 60,
  },
  '/ads.txt': {
    age: 30 * 60,
  },
  '/app-ads.txt': {
    age: 30 * 60,
  },
  '/rss/*': {
    age: 60,
  },
  // static assets (e.g. images)
  '/static/*': {
    age: 30 * 60,
  },
  //  Don't set cache more than a year, https://stackoverflow.com/questions/7071763/max-value-for-cache-control-header-in-http
  '/_next/static/public/static/images/*': {
    age: 365 * 24 * 60 * 60,
  },
}

const cacheControl = mapping => {
  const stale = R.prop('stale', mapping)

  const age = R.prop('age', mapping)

  if (stale) {
    return `max-age=${age}, stale-while-revalidate=${stale}`
  }

  if (age) {
    return `max-age=${age}`
  }

  return 'max-age=5' // default fallback value
}

/**
 * please use { NODE_ENV = production } to test your cache control
 * @see https://nextjs.org/docs/going-to-production
 */
const handleCacheControl = () => {
  if (disableCache) {
    server.get('*', nocache())
  } else {
    server.get('*', (_, res, next) => {
      res.set('Cache-Control', 'public, max-age=5')
      next()
    })

    R.mapObjIndexed((index, key, map) => {
      server.get(key, (_, res, next) => {
        // public = allow cache by CDN
        res.set('Cache-Control', `public, ${cacheControl(map[key])}`)
        next()
      })
    }, cacheMapping)
  }

  return server
}

module.exports = {
  handleCacheControl,
}

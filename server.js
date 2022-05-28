require('dotenv').config()

const R = require('ramda')

const qs = require('qs')

const express = require('express')

const next = require('next')

const helmet = require('helmet')

const path = require('path')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()

const { handleCacheControl } = require('./serverCache')

const { PORT, APP_ENV } = process.env

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(
      helmet({
        contentSecurityPolicy: false,
      })
    )

    server.use(handleCacheControl())

    server.use((req, res, next) => {
      try {
        // handle article title failed to decode
        decodeURIComponent(req.path)
        next()
      } catch (err) {
        const { query, path } = req

        if (R.test(/\/(author|article)\/(-|_|[a-zA-Z0-9])+\/[^?#]+/, path)) {
          res.redirect(
            301,
            R.pipe(R.split('/'), R.update(-1, ''), R.join('/'))(path) +
              qs.stringify(query, { addQueryPrefix: true })
          )
        } else {
          res.set('Cache-Control', 'public, max-age=0')
          res.status(404)

          return app.render(req, res, '/_error', {})
        }
      }
    })

    server.get(
      [
        '/apple-app-site-association',
        '/.well-known/apple-app-site-association',
      ],
      (_, res) => {
        const file = path.join(
          __dirname,
          'res',
          'assocDomain',
          APP_ENV,
          'apple-app-site-association.json'
        )

        res.set('Content-Type', 'application/json')

        res.status(200)

        res.sendFile(file)
      }
    )

    server.get(
      ['/assetlinks.json', '/.well-known/assetlinks.json'],
      (_, res) => {
        const file = path.join(
          __dirname,
          'res',
          'assocDomain',
          APP_ENV,
          'assetlinks.json'
        )

        res.set('Content-Type', 'application/json')

        res.status(200)

        res.sendFile(file)
      }
    )

    server.get('/ads.txt', (_, res) => {
      const ads = path.join(__dirname, 'res', 'ads', 'ads.txt')

      res.set('Content-Type', 'text/plain')

      res.status(200)

      res.sendFile(ads)
    })

    server.get('/app-ads.txt', (_, res) => {
      const appAds = path.join(__dirname, 'res', 'ads', 'app-ads.txt')

      res.set('Content-Type', 'text/plain')

      res.status(200)

      res.sendFile(appAds)
    })

    server.get('/robots.txt', (req, res) => {
      const robots = path.join(
        __dirname,
        'res',
        'robots',
        APP_ENV,
        'robots.txt'
      )

      res.set('Content-Type', 'text/plain')

      res.status(200)

      res.sendFile(robots)
    })

    server.get('/static/*', (req, res) => handle(req, res))

    // fallback
    server.get('*', (req, res) => handle(req, res))

    server.listen(PORT, '0.0.0.0', err => {
      if (err) throw err

      console.info(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(error => {
    console.error(error)

    process.exit(1)
  })

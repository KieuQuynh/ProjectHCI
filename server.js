const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3002
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/HomePage/HomePage')
  })

  server.get('/shop', (req, res) => {
    return app.render(req, res, '/ShopPage/ShopPage')
  })

  server.get('/product/:product_name', (req, res) => {
    return app.render(req, res, '/ProductDetailPage/ProductDetailPage', { product_name: req.params.product_name })
  })

  server.get('/cart', (req, res) => {
    return app.render(req, res, '/Cart/Cart')
  })

  server.get('/checkout', (req, res) => {
    return app.render(req, res, '/Checkout/Checkout')
  })

  server.get('/blog/:blogType', (req, res) => {
    return app.render(req, res, '/Blog/Blog', { blogType: req.params.blogType })
  })

  server.get('/blog-detail/:blogId', (req, res) => {
    return app.render(req, res, '/BlogDetail/BlogDetailPage', {
      blogType: req.params.blogType,
      blogId: req.params.blogId
    })
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/About/AboutPage')
  })

  server.get('/checkout/order-receive', (req, res) => {
    return app.render(req, res, '/Checkout/OrderReceive')
  })

  server.get('/pages/contact-us', (req, res) => {
    return app.render(req, res, '/Contact/Contact')
  })

  server.get('/pages/video-pages', (req, res) => {
    return app.render(req, res, '/VideoPage/VideoPage')
  })

  server.get('/pages/privacy', (req, res) => {
    return app.render(req, res, '/PrivacyPage/PrivacyPage')
  })

  server.get('/pages/store-location', (req, res) => {
    return app.render(req, res, '/StoreLocation/StoreLocation')
  })

  server.get('/pages/faq', (req, res) => {
    return app.render(req, res, '/FAQ/FAQ')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

const appData = require('../data.json')
let seller = appData.seller
let goods = appData.goods
let ratings = appData.ratings
module.exports = function (app) {
  app.get('/api/seller', function (rep, res) {
    res.json({
      errno: 0,
      data: seller
    })
  })
  app.get('/api/goods', function (req, res) {
    res.json({
      errno: 0,
      data: goods
    })
  })

  app.get('/api/ratings', function (req, res) {
    res.json({
      errno: 0,
      data: ratings
    })
  })
}

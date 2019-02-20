const appData = require('./userInfo.json')
let questions = appData.questions

module.exports = function (app) {
  app.get('/api/questions', function (rep, res) {
    res.json({
      errno: 0,
      data: questions
    })
  })

}

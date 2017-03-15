const pug = require('pug')

let html = pug.renderFile('./src/components/index/index.pug', {
  pageTitle: '首页',
  youAreUsingPug: true
})

module.exports = {
  data: html
}

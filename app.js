#! /usr/bin/env node

const express = require('express')
const app = express()
const router = express.Router()
app.use(router)

const port = 9000
app.listen(port)
console.log('http://localhost:9000')

let index = require('./src/components/index/index')
router.get('/index.html', (req, res) => {
  res.send(index.data)
})

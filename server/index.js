const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method.toLowerCase() === 'options') {
    return res.end()
  }
  next()
})

app.use(bodyParser.json())

const SECRET = 'VUE_MASTER'

app.get('/test', (req, res) => {
  res.json({
    test: 'test'
  })
})

app.post('/login', (req, res) => {
  const { username } = req.body
  if (username === 'admin') {
    res.json({
      code: 200,
      message: '登录成功',
      data: {
        username,
        token: jwt.sign({ username: 'admin' }, SECRET, { expiresIn: 20 })
      }
    })
  } else {
    res.json({
      code: 401,
      message: '用户名不存在'
    })
  }
})

app.get('/validate', (req, res) => {
  const token = req.headers.authorization
  jwt.verify(token, SECRET, (err, decode) => {
    if (err) {
      res.json({
        code: 401,
        message: 'token invalid'
      })
    } else {
      res.json({
        code: 200,
        data: {
          username: decode.username,
          token: jwt.sign({ username: 'admin' }, SECRET, { expiresIn: 20 }) // 延长token过期时间
        }
      })
    }
  })
})

app.listen(3000, (err) => {
  if (err) return console.error(err)
})

import express,{Router} from 'express'
import { Server } from 'http'
import bodyParser from 'body-parser'

const app = express()
// Confs
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('superSecret', 'hack.summit')
app.set('view engine', 'jade')
app.use(express.static('public'))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// route conf
const router = new Router()

router.get('/', (req, res) => {
  res.json({message: 'Welcome to awesome API'})
})

import login from './app/routes/login/index.js'
login(app, router)
import signup from './app/routes/signup/index.js'
signup(router)

app.use('/api', router)

var server = Server(app)

var io = require('socket.io')(server)
io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
})

export default server

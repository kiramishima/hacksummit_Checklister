require('babel-register')({
  presets: ['es2015-node', 'stage-3']
})

var server = require('./server').default
server.listen(3000)
console.log('Server Running on port 3000')

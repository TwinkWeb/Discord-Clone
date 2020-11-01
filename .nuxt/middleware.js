const middleware = {}

middleware['authFunc'] = require('..\\middleware\\authFunc.js')
middleware['authFunc'] = middleware['authFunc'].default || middleware['authFunc']

export default middleware

const { clone } = require('./download')
const path = require('path')
const repo = 'github:su37josephxia/vue-template'
const desc = path.join('/Users/lvjiawen/Desktop/clone')
clone(repo, desc)

const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'test.jpg'))
const ws = fs.createWriteStream(path.join(__dirname, 'test2.jpg'))
rs.pipe(ws) 
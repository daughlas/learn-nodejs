const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const {url, method, headers } = request
  if (url === '/' && method === 'GET') {
    fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
      if (err) {
        console.log(err)
        response.end('404')
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify({
      name: 'lvjiawen'
    }))
  } else if (method=== 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream(path.join(__dirname, url)).pipe(response)
  }
})

server.listen(3000, () => {
  console.log('listening port 3000')
})
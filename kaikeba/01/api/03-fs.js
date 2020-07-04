const fs = require('fs')
const path = require('path')

// 同步
// const data = fs.readFileSync(path.join(__dirname, './download.js'))
// console.log(data, data.toString())

// 异步
fs.readFile(path.join(__dirname, './download.js'), (err, data) => {
  if (err) throw err
  console.log(data, data.toString())
})
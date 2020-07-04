const os = require('os')
const mem = os.freemem() / os.totalmem() 
console.log(`内存占用路${mem.toFixed(2)}%`)

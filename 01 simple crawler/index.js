var request = require("request");
const cheerio = require("cheerio");
const promise = require('bluebird');
const baseUrl = "http://www.baidu.com"; // 这个链接有没有觉得眼熟，嘿嘿

// 这个主要获取文章标题
function startReq(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      console.log('error:', error)
      console.log('statusCode:', response && response.statusCode)
      console.log('body:', body)
    })
  })
}


startReq(baseUrl)

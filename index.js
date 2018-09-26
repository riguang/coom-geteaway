const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

const userServiceProxy = httpProxy('https://www.baidu.com')

// 身份认证
app.use(async(req, res, next) => {
  // TODO: 身份认证逻辑
  const a = await time()
  console.log(a)
  next()
})
function time(){
  return new Promise((resolve)=>{
    setTimeout(function () {  
        resolve(1)
      },1000)
  })
}
// 代理请求
app.get('/', (req, res, next) => {
  userServiceProxy(req, res, next)
})

app.listen(3000)

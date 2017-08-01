//npm init -> package.json
//npm install express —save
//npm install body-parser --save
//node main.js
//http://localhost:3030
//變更完記得要

//npm notice created a lockfile as package-lock.json. You should commit this file.
//package.json >> 真正安裝的版本 , 如果要與別的project 或人協作, 就要 commit 把環境固定下來

// url in Node.js
//https://nodejs.org/docs/latest/api/url.html#url_url_strings_and_url_objects



const express = require('express')
const app = express() //webserver 

//express 套件
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//app.get(  路徑, handler)   ：使用者輸入了 斜線 ,就會開始執行 request response
//localhost:3000/   >> 預設
//localhost:3000/sayhi
// github.com >> 對網址request , 而且是get
// 對網頁做送出按鈕, 就是對網址做request , 而且是 post (大多狀況) 
// express 最常用 get post 
//coding  完要重啟 server



//新增 routing
app.get('/hello', function (req, res) {
  res.send('hello routing')
})

//routing同路徑 可同時作 post 與 get
app.post('/hi', function (req, res) {
  let query = req.query;  
  let body = req.body;
  res.send('hi routing from post,query=' +
          JSON.stringify(query)+
          JSON.stringify(body))
})

//http://localhost:3000/hi?a=1&b=3
app.get('/hi', function (req, res) {
  res.send('hi routing from get, : '+JSON.stringify(req.query))
})

//在routing 的路徑下參數：
//可以用正規表示法, 或是下面的方式 :id
//把後面的東西傳到id 這個變數裡面
//http://localhost:3000/prod/123?address=taipei
app.get('/prod/:id', function (req, res) {
  let id = req.params.id;
  res.send(`hi routing from get, : 
    query: ${JSON.stringify(req.query)}
    id: ${JSON.stringify(id)}
    `)
})
//為什麼博客來會這樣下？不是把id 放在query , v=id(youtube), 博客來>id 放在路徑


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
//port, callback
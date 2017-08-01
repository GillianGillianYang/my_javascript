//node req.js 
//npm install request --save 

const  request = require('request');

request('http://localhost:3000/hello', 
  function (error, response, body){
    console.log(body)
})



//透過body傳遞資料
//querystring < 256 字元; 是加在網址後面的query 
//使用 json true ; 會將body 中的內容轉成 json 傳出去

request({
  url: 'http://localhost:3000/hi',
  method: 'POST',
  qs:{address: 'taipei'},
  body:{detail:'123'},
  json: true
}, 
  function (error, response, body){
    console.log(response && response.statusCode);
    console.log(body); // body 其實是在 repsonse 下的物件
})


// request({
//   url: 'http://localhost:3000/hi',
//   method: 'POST',
//   qs:{address: 'taipei'}
// }, 
//   function (error, response, body){
//     console.log(response && response.statusCode);
//     console.log(body); // body 其實是在 repsonse 下的物件
// })
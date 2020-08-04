var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
 
var app = express()
 
app.use(session({
  // secret: 꼭 넣어야함. 다른 사람한테 보여주면 안되는 값 저장. 버전 관리에서 제외해야함
  secret: 'keyboard cat',
  // resave: false로 하면 세션 데이터 변경사항 없으면 저장 안함.
  resave: false,
  // saveUninitialized: true로 하면 세션이 필요하기 전엔 구동 안함
  saveUninitialized: true
}))
 
app.get('/', function (req, res, next) {
  res.send('hello')
})

app.listen(3000, function(){
    console.log('3000!');
});

// express-session npm 공홈의 example 간단하게 수정
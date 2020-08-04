var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
 
var app = express()

// 미들 웨어에 session 객체 추가해줌
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
 
app.get('/', function (req, res, next) {
    console.log(req.session);
    // session객체에 num이 자동으로 생성됨. 이름을 'hi'라고 해도 되더라
    if(req.session.num === undefined){
        req.session.num = 1;
    }
    else{
        req.session.num = req.session.num += 1;
    }
  res.send(`views: ${req.session.num}`);
})

app.listen(3000, function(){
    console.log('3000!');
});

// session 객체
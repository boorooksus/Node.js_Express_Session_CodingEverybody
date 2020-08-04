var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
// session-file-store npm 추가
var FileStore = require('session-file-store')(session);
 
var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // session 추가되면 session 폴더 안에 파일로 저장
  store:new FileStore()
}))
 
app.get('/', function (req, res, next) {
    console.log(req.session);
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

// session store
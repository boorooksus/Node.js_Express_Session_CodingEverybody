var express = require('express')
var app = express()
var port = 3000
var fs = require('fs');
var bodyParser = require('body-parser')
var compression = require('compression');
var topicRouter = require('./routes/00_topic.js');
var indexRouter = require('./routes/00_index.js');
// helmet 사용
var helmet = require('helmet');

app.use(helmet());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.get('*', function(request, response, next){
    fs.readdir('./data', 'utf8', (error, filelist)=>{
        request.list = filelist;
        next();
    })
})

app.use('/topic', topicRouter);
app.use('/', indexRouter);

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// 
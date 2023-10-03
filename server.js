var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
   res.render('index', {
                about: JSON.parse(fs.readFileSync(__dirname + '/data/about.json')),
                members: JSON.parse(fs.readFileSync(__dirname + '/data/members.json')),
                history: JSON.parse(fs.readFileSync(__dirname + '/data/history.json')),
                characteristics: JSON.parse(fs.readFileSync(__dirname + '/data/characteristics.json')),
                rules: JSON.parse(fs.readFileSync(__dirname + '/data/rules.json')),
                results: JSON.parse(fs.readFileSync(__dirname + '/data/results.json'))
			}
	   );
})

var server = app.listen(port, function () {
   console.log("App listening at port " + port)
})


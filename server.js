const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));

const MongoClient = require('mongodb').MongoClient

var db 

// MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds061721.mongolab.com:61721/locationizer', (err, database) => {
// 	if (err) return console.log(err)
// 	db = database
// 	app.listen(3000, function(){
// 		console.log('listening on 3000')
// 	})
// })

app.listen(process.env.PORT || 3000, function(){
		console.log('listening on 3000')
	})

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
	res.sendFile( __dirname + '/index.html')
})

var areas = [
  {id: 1, playlistId:'user:spotifycommunity:playlist:6JZYbH5F02DSJcJkkvKAPw'},
  {id: 2, playlistId:'user:universalmusicse:playlist:6rpKSRDPTN8sV98JG5qIwJ'},
  {id: 3, playlistId:'user:tresbienshop:playlist:6yrPSoQToeXa6zMtWT3ol8'}
]


app.get('/areas/:id', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  //console.log(req.params.id);
  var area = areas.filter(a => a.id == req.params.id)[0]
  res.send(JSON.stringify(area));
});

app.post('/quotes', (req, res) => {
  console.log(req.body)
})


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

app.listen(3000, function(){
		console.log('listening on 3000')
	})

app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function (req, res) {
	res.sendFile( __dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})


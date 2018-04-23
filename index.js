const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
//var test = require('./demo');
var app = express();

//

var bodyParser = require('body-parser');

//
const PORT = process.env.PORT || 5000
//console.log(__dirname);
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  //.get('/demo', function(req, res) {
	  //var user_id = req.param('id');
	 // var token = req.param('token');
	 // var geo = req.param('geo');  
	//console.log(user_id+" "+" "+token+" "+" "+geo)
	  //res.send(user_id + ' ' + token + ' ' + geo);
	//})
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.post('/demo', function(req, res) {
		console.log(req.body);
		res.status(200).send(req.body);
		//var user_id = req.body.id;
		//var token = req.body.token;
		//var geo = req.body.geo;
		//console.log(user_id+" "+" "+token+" "+" "+geo);
		//res.send(user_id + ' ' + token + ' ' + geo);
	})
  //.get('/demo', (req, res) => testing(req,res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
  function testing(req,res){
  //res.setHeader('Content-Type', 'text/plain')
  //res.write('you posted:\n')
  //res.end(JSON.stringify(req.body, null, 2))
  //console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  //res.status(200).send();//res.send(200);
  //console.log(typeof test.test);
	  }

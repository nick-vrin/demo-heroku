//const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
var test = require('./demo');
var exphbs  = require('express-handlebars');
var app = express();

//
var bodyParser = require('body-parser');
// var hbs = exphbs.create({
//     // Specify helpers which are only registered on this instance.
//     helpers: {
//         foo: function () { return 'FOO!'; },
//         bar: function () { return 'BAR!'; }
//     }
// });

//
const PORT = process.env.PORT || 5000
//console.log(__dirname);
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.engine('handlebars', hbs.engine)
  //.set('view engine', 'handlebars')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  //.get('/cool', (req, res) => res.send(cool()))
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
		//console.log(req.body)
    //console.log(req.query);
    var y = [];
    var x = req.body;
    x = Object.values(x);
    for(var i = 0;i< x.length;i++){
      var z = x[i].replace(/"/g, '');
      z = z.replace(/,/g,'');
      //console.log(z);
      y.push(z);
    }
    console.log(y);
    //console.log(x[0]);
    //x = JSON.stringify(x);
    //console.log(x);
    //x = object.values(x);

    //x = JSON.stringify(x);
    //console.log(x);
    //x=x.replace(/"/g, '');
    //x=x.replace(/\\/g, '"');
    //x=x.replace(/,,/g,",")
    res.status(200).send(x);
    //console.log(JSON.parse(x));
    //console.log(x);
    //console.log(x);
    //x = x.replace("\\"," ");
    //x = x.replace("\"\"", "\"");
    //console.log(x);
    //res.render('pages/index',{data : x});
		//res.send(200);
		//test.test(req.query);
		//var user_id = req.body.id;
		//var token = req.body.token;
		//var geo = req.body.geo;
		//console.log(user_id+" "+" "+token+" "+" "+geo);
		//res.send(user_id + ' ' + token + ' ' + geo);
	})
  //.get('/demo', (req, res) => testing(req,res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
  function testing(req,res){
  res.end(JSON.stringify(req.query, null, 2))
		res.status(200)
  //res.setHeader('Content-Type', 'text/plain')
  //res.write('you posted:\n')
  //res.end(JSON.stringify(req.body, null, 2))
  //console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  //res.status(200).send();//res.send(200);
  //console.log(typeof test.test);
	  }

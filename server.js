var express        = require('express')
var compression    = require('compression');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http           = require('http').Server(app);
var io             = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(compression());

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

exports = module.exports = app;

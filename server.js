var express = require('express');
var app = express();
var robot = require("kbm-robot");

robot.startJar();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/press/:key', function (req, res) {
	robot.press(req.params.key).go();
	res.send('1');
});

app.get('/release/:key', function (req, res) {
	robot.release(req.params.key).go();
	res.send('1');
});

app.get('/type/:string', function (req, res) {
	robot.type(req.params.string).go();
	res.send('1');
});

app.get('/sleep/:mil', function (req, res) {
	robot.sleep(req.params.mil).go();
	res.send('1');
});

app.get('/mouse/move/:x/:y', function (req, res) {
	robot.mouseMove(req.params.x, req.params.y).go();
	res.send('1');
});

app.get('/mouse/press/:buttons', function (req, res) {
	robot.mousePress(req.params.buttons).go();
	res.send('1');
});

app.get('/mouse/release/:buttons', function (req, res) {
	robot.mouseRelease(req.params.buttons).go();
	res.send('1');
});

app.get('/mouse/click/:buttons/:delay', function (req, res) {
	robot.mouseClick(req.params.buttons,req.params.delay).go();
	res.send('1');
});

app.get('/mouse/wheel/:amount', function (req, res) {
	robot.mouseWhell(req.params.amount).go();
	res.send('1');
});

var server = app.listen(5703, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Stroke listening at http://%s:%s', host, port);

});
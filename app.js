var express = require('express');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'KwVX8x0IvwmCQgDxvEyPMInl-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'DN7HjoVpcw9uJctUIzw6wRRG',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'IvvxcsJGjx0aqYRjUeE28iuI'
});

var app = express();
app.use(AV.express());
app.listen(process.env.LEANCLOUD_APP_PORT);
 
app.get('/', function(req, res) {
  res.render('index', {title: 'Hello world'});
});

app.get('/time', function(req, res) {
  res.json({
    time: new Date()
  });
});

app.get('/todos', function(req, res) {
  new AV.Query('Todo').find().then(function(todos) {
    res.json(todos);
  }).catch(function(err) {
    res.status(500).json({
      error: err.message
    });
  });
});
var handler = require('./handler.js');
var parse = require('url').parse;

var routeJson = {
  GET: {
    '/': function(req, res) { handler.index(req, res); },
    '/index.html': function(req, res) { handler.index(req, res); },
    '/login.html': function(req, res) { handler.login(req, res); },
    '/logout.html': function(req, res) { handler.logout(req, res); },
    '/register.html': function(req, res) { handler.register(req, res); },
    '/404.html':  function(req, res) { handler.noFound(req, res); }
  },
  POST: {
  	'/adduser': function(req, res, params) { handler.addUser(req, res, params); },
  	'/veritylogi': function(req, res, params) { handler.verityLogin(req, res, params); }
  }
}

exports.route = function() {
  return function(req, res, next) {
    if(!routeJson[req.method]) {
      next();
      return;
    }
    var routes = routeJson[req.method]; //对应此请求方法的路由表
    var url = parse(req.url);
    var paths = Object.keys(routes); //将对应的路径存在数组中

    for(var i = 0; i < paths.length; i ++) {
      var path = paths[i];
      if(url.pathname === path) { //找到匹配的请求路径
        var fn = routes[path]; //取出方法
        var args = {}; //TODO 获取参数
        fn.call(null, req, res);
        return;
      }
    }
    next();
  };
}

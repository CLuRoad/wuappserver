exports.index = function(req, res) {
  res.end('index');
}

exports.login = function(req, res) {
  res.end('login');
}

exports.register = function(req, res) {
  res.end('register');
}

exports.noFound = function(req, res) {
  res.end('404');
}

exports.addUser = function(req, res, params) {
  res.end('addUser');
}

exports.verityLogin = function(req, res, params) {
  res.end('verityLogin');
}

exports.logout = function(req, res) {
  res.end('logout');
}

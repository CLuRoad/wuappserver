var connect = require('connect');
var router = require('./router');

connect().use(router.route()).listen(3000);

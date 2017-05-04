var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3000, function(){
    // eslint-disable-next-line no-console
    console.log('Server running on 3000...');
});
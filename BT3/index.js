// Modules pino:
/* 
var logger = require('pino')();
logger.info('hello world');
var child = logger.child({a: 'property'});
child.info('hello child!');
*/

// Modules get-port
var getPort = require('get-port');
(async () => {
    console.log(await getPort());
})();

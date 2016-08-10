var config = require('./config'),
    marklogic = require('marklogic');

var serviceName = 'testService';

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  password: config.auth.pass,
  authType: 'digest'
});

var params = {
  a: 1,
  b: 2
};


// BUG: LIST OF ARGS DOES NOT WORK
//db.resources.get('testService', {a: 1, b: 2})
// ARGS AS SINGLE OBJECT WORKS
db.resources.get({name: 'testService', params: {a: 1, b: 2}})
  .result(function(response){
    console.log(JSON.stringify(response, null, 2));
  });

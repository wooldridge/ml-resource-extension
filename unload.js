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

db.config.resources.remove(serviceName)
  .result(function(response){
    console.log(JSON.stringify(response, null, 2));
  });

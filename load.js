var config = require('./config'),
    fs = require('fs'),
    marklogic = require('marklogic');

var servicePath = config.path + 'script.sjs',
    serviceName = 'testService';

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  password: config.auth.pass,
  authType: 'digest'
});

db.config.resources.write(serviceName, 'javascript', fs.createReadStream(servicePath))
  .result(function(response){
    console.log(JSON.stringify(response, null, 2));
    db.config.resources.list()
      .result(function(response){
        console.log(JSON.stringify(response, null, 2));
        db.config.resources.read(serviceName)
          .result(function(response){
            console.log(typeof response);
            console.log(response.toString('utf8'));
          });
      });
  });

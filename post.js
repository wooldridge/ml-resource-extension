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

// BUG: LIST OF ARGS DOES NOT WORK
//db.resources.post('testService', {basename: 'three'}, {key: 'value'})
// ARGS AS SINGLE OBJECT WORKS
db.resources.post({
  name: 'testService',
  params: {basename: 'three'},
  documents: {key: 'value'}
})
  .result(function(response){
    console.log(JSON.stringify(response, null, 2));
  });

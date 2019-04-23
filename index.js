// Express GraphQL
const express = require('express');
const graphqlHTTP = require('express-graphql');
// DB
const POSTGRESQL = require('./src/postgresql');
const postgresql = new POSTGRESQL();
// Schems
const schema = require('./src/schema.js');
// Root 
const root = require('./src/root.js');
// System
const debug = require('debug')('pup:index.js');
debug('--> ...Starting App');


// ****** Init the connection pool to PostgreSQL shards ******* //
postgresql.init();


/**
 * Start the server
 */
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
let port = process.env.PORT || '4000';
app.listen(port);
debug('GraphQL API server started: port >', port);
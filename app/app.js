const express = require('express');
const http = require('http');
const graphql = require('express-graphql');
const RootSchema = require('./schemas/RootSchema');

const app = express();

app.use('/graphql', graphql({
  schema: RootSchema,
  rootValue: {},
  graphiql: true,
}));

http.createServer(app).listen(8000);

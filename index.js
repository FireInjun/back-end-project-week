const express = require('express');
const setupMiddleware = require('./_config/middleware');
const db = require('./_config/db');
const setupRoutes = require('./_config/routes');
const server = express();
const port = process.env.PORT || 777;

setupMiddleware(server);
setupRoutes(server);

db.connectTo()
  .then(() => {
    console.log('\n... API Connected to lambdaNotes Database ...\n');
    server.listen(port, () => {
      console.log(`---------------Server listening on port ${port}---------------`);
    });
  })
  .catch(err => {
    console.log('\n*** ERROR Connecting to MongoDB, is it running? ***\n', err);
  });

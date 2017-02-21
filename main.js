'use strict';

require('dotenv').config();
const server = require('./server');

server.listen(process.env.PORT, () => {
  console.log('server running port:', process.env.PORT);
});

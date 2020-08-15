/* eslint-disable import/first */
require('dotenv').config();
import * as express from 'express';
import { AuthController } from './controller/auth.controller';

import { get } from 'config';
const app = express();
const port = get('app.port');

function setUpRoutes() {
  // Static Routes
  app.use('/', express.static('build'));
  // API Routes
  new AuthController(app);
}

function start() {
  setUpRoutes();
  app.listen(port, () => {
    console.log(`Status Page listening on port ${port}`);
  });
}

start();

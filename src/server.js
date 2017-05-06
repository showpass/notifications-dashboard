const express = require('express');
const ParseDashboard = require('parse-dashboard');

import {
  HOST,
  PORT,
  USER1,
  USER1_PASSWORD,
  PARSE_DASHBOARD_SERVER_URL,
  PARSE_DASHBOARD_APP_ID,
  PARSE_DASHBOARD_APP_NAME,
  PARSE_DASHBOARD_MASTER_KEY
} from './config';

const dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": PARSE_DASHBOARD_SERVER_URL,
      "appId": PARSE_DASHBOARD_APP_ID,
      "appName": PARSE_DASHBOARD_APP_NAME,
      "masterKey": PARSE_DASHBOARD_MASTER_KEY
    }
  ],
  "users": [
    {
      "user": USER1,
      "pass": USER1_PASSWORD
    }
  ]
}, true);

const app = express();

// make the Parse Dashboard available at /dashboard
app.use('/parse', dashboard);

const httpServer = require('http').createServer(app);
httpServer
  .listen(PORT, HOST, function () {
    console.log(`Sync server listening on ${HOST}:${PORT}`);
  });

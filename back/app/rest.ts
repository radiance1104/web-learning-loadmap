import * as core from "express-serve-static-core";
import * as http from "http";
import express = require('express');
import bodyParser = require('body-parser');
import {environment} from '../environment';

export class Rest {
  app: core.Express;
  server: http.Server;

  constructor() {
  }

  start() {
    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    this.server = app.listen(environment.restServer.port, () => {
      console.log(`listening to port: ${environment.restServer.port}`);
    });

    app.use((request, response, next) => {
      response.header('Access-Control-Allow-Origin', '*');
      response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
    });

    app.get('/newsfeeds', (request, response, next) => {
      try {
        const newsfeeds = [
          {
            message: 'あけましておめでとう！',
            createdAt: new Date('2020-01-01T02:23:30'),
          },
          {
            message: 'メリークリスマス！',
            createdAt: new Date('2019-12-25T10:52:02'),
          },
          {
            message: 'ハッピーハロウィーン！',
            createdAt: new Date('2019-10-31T20:13:55'),
          },
        ];
        response.send(newsfeeds);
      } catch (error) {
        response.sendStatus(500);
      }
    });
  }

  stop() {
    this.server.close();
  }
}

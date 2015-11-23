import express from 'express';
import path from 'path';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';
import bodyParser from 'body-parser';
import compression from 'compression';
import {generateBinId} from './src/utils';

const app = express();
const server = http.createServer(app);
const ws = io(server);

app.set('view engine', 'jade');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.use(require('./src/middleware/webpack-dev'));
app.use(require('./src/middleware/webpack-hot'));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'src', 'index.jade'), {
    PROD: process.env.NODE_ENV === 'production'
  });
});

app.get('/bin', (req, res) => {
  res.status(200).send({id: generateBinId()});
});

app.post('/:postbin', (req, res) => {
  ws.emit(req.params.postbin, {
    headers: req.headers,
    body: req.body,
    from: req._remoteAddress,
    time: req._startTime,
    bytes: req.headers['content-length'],
    params: req.params,
    url: req.url
  });
  res.status(200).send('POST request received!');
});

server.listen(3000, (err) => {

  if (err) {
    console.log(err);
    return;
  }

  console.log(server.address())
});

import express from 'express';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';
import bodyParser from 'body-parser';
import compression from 'compression';

import {generateBinId} from './src/utils';

const app = express();
const server = http.createServer(app);
const ws = io(server);

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

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

server.listen(9000, () => {
  console.log(server.address())
});

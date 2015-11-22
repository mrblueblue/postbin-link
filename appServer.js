import express from 'express';
import generateBinId from './src/utils/generateBinId';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/bin', (req, res) => {
  res.status(200).send({id: generateBinId()});
})

app.listen(9000, () => console.log('yo'))

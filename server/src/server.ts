import express from 'express';

const app = express();

app.get('/primeira-aula', async (req, res) => {
  return res.sendStatus(200);
});

app.listen(3333);
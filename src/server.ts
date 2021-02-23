import express from 'express';

const app = express();

app.post('/', (req, res) => {
  return res.json({
    message: 'Post',
    id: 'ss'
  });
});

app.get('/', (req, res) => {
  return res.json({
    message: 'Get'
  });
});

app.listen(3000, () => console.log('server run'));

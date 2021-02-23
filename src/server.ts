import express from 'express';

const app = express();

app.post('/', (req, res) => res.json({
  message: 'Post',
}));

app.get('/', (req, res) => res.json({
  message: 'Get',
}));

app.listen(3000, () => console.log('server run'));

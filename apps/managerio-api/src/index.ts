import express from 'express';

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    (await import('dotenv')).config();
  }
})();

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    hello: 'world!',
  });
});

const port = +(process.env.PORT || 3000);
server.listen(port, () => console.log(`API server listening on port ${port}`));

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'this is my-demo app';
  res.send(`Hello Tekton, ${target}!`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

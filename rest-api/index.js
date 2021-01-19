const { readFileSync, writeFileSync} = require('fs');

const express = require('express');

const port = 5000;
const app = express();

app.get('/', (request, response) => {
  const count = readFileSync(`${__dirname}/count.txt`, 'utf-8');
  const newCount = parseInt(count) + 1;

  console.log('COUNT: ', count);

  writeFileSync(`${__dirname}/count.txt`, `${newCount} `);

  response.send(`<strong>${count}</strong>`);
});

app.listen(5000, () => console.log(`server: http://192.168.1.114:${port}`));

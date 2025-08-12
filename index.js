const express = require('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Messenger Bot is running!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});

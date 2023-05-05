const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use('/', (req, res) => {
  res.send({
    message: '👋',
  });
});

const port = process.env.PORT || 1400;

app.listen(port, () => {
  console.log(`🟢 Server running on port ${port}`);
});

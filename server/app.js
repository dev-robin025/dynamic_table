const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = 9000;

dotenv.config({ path: './.env.local' });
require('./db/connection');

app.use(express.json());
app.use(cors());

app.use('/api/v1', require('./router/users'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

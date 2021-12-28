const express = require('express');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

app.use(require('./router/users'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

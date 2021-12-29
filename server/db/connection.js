const mongoose = require('mongoose');

const DB = process.env.DB_URI;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  // .then(() => console.log('mongodb connected'))
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });

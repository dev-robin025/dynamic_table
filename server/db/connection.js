const mongoose = require('mongoose');

const DB = `mongodb+srv://ShahadatRobin:ShahadatRobin025@cluster0.vbrwn.mongodb.net/users_table?retryWrites=true&w=majority`;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connected'))
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });

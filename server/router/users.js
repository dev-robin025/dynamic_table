const express = require('express');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    console.log('receive get requests');
  } catch (error) {
    console.log(error);
  }
});

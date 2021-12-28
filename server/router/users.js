const express = require('express');

const router = express.Router();

require('../db/connection');
const User = require('../model/user.schema');

router.post('/add/user', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    await newUser.save();
    res.status(201).json('User added successfullly');
  } catch (error) {
    res.status(403).json({ error: error });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phone, city } = req.body;
});

module.exports = router;

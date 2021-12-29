const express = require('express');

const router = express.Router();

const User = require('../model/user.schema');

router.post('/add/user', async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json('User added successfully');
  } catch (error) {
    res.status(403).json({ error: error });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json('Successfully Updated');
  } catch (error) {
    res.status(424).json({ error: error });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.deleteOne({ _id: id });
    res.status(202).json('Successfully Deleted');
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const Note = require('./UsersModel');
const User = require('../notes/NotesModel');

router
  .route('/')
  .get((req, res) => {
    res.send("Nope.")
  })
  .post((req, res) => {
    res.json({ message: "Yup.", body: req.body })
  })


module.exports = router;

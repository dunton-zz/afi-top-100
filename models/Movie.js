const mongoose = require('mongoose');

const { Schema } = mongoose;

const Movie = new Schema({
  title: String,
  watched: { type: Boolean, default: false },
});

module.exports = Movie;

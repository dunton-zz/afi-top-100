const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  watched: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('movie', movieSchema);

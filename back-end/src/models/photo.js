'use strict';

import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
  picture: { type: String, required: true },
  description: { type: String },
  dog: {
    type: mongoose.Schema.ObjectId,
    unique: true,
  },
});

export default mongoose.model('photo', photoSchema);

'use strict';

import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
  url: { type: String, required: true },
  description: { type: String },
  dog: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

export default photoSchema;

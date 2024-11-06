// models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  path: String,
  extension: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Image', imageSchema);

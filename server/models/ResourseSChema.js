const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  resourceName: {
    type: String,
    required: true,
  },
  resourceType: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Store image filename or URL
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('resources', resourceSchema);

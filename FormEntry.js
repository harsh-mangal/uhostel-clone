const mongoose = require('mongoose');

const formEntrySchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  roomNumber: String,
  newPassword: String,
});

module.exports = mongoose.model('FormEntry', formEntrySchema);

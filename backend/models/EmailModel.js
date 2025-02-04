import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Enforce unique emails to avoid duplicates
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const EmailModel = mongoose.models.email || mongoose.model('email', Schema);

export default EmailModel;

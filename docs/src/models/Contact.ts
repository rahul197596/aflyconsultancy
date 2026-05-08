import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String },
  message: { type: String, required: true },
  fileUrl: { type: String },
  fileName: { type: String },
  status: { type: String, enum: ['new', 'read', 'responded'], default: 'new' },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

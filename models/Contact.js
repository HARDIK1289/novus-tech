import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
  // Optional: Track IP address for security
  ip: {
    type: String,
  },
}, {
  timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
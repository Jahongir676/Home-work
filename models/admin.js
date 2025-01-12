import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Admin' },
});

export default mongoose.model('Admin', adminSchema);

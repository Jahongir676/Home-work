import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    slug: { type: String, unique: true },
    is_active: { type: Boolean, default: true },
}, { timestamps: true });
const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;

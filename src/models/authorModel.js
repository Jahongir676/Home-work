import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    website: String,
    date_of_birth: Date,
    nationality: String,
    books: [{ type: String }],
}, { timestamps: true });
const authorModel = mongoose.model('Author', authorSchema);
export default authorModel;

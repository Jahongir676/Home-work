import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String
});

export default mongoose.model('User', userSchema);

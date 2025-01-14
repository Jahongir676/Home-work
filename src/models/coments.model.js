import mongoose from 'mongoose';
const {Schema} = mongoose.Schema;
const ComentsModel = new mongoose.Schema({
    content:{type: String, required: true},
    article_id:{type: Schema.Types.ObjectId, ref: 'Article', required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    course_id: { type: Schema.Types.ObjectId, ref: 'Course', required: true},
    created_at: { type: Date, default: Date.now}
});

export default ComentsModel;
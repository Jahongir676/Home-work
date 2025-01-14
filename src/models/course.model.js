import mongoose from 'mongoose';

const CourseModel = new mongoose.Schema({
    name:{type: String, required: true},
    course_id:{type: String, required: true},
    description:{type: String}
});

export default CourseModel;

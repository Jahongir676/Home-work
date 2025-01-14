import express from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from '../controllers/course.controller.js';

const CourseRouter = express.Router();

CourseRouter.post('/create', createCourse);
CourseRouter.get('/', getAllCourses);
CourseRouter.get('/:id', getCourseById);
CourseRouter.put('/:id', updateCourse);
CourseRouter.delete('/:id', deleteCourse);

export default CourseRouter;

const express = require('express');
const { createBlog, getBlogs, updateBlog, deleteBlog, addComment } = require('../controllers/user.blog.controler');
const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);
router.post('/:id/comment', addComment);

module.exports = router;

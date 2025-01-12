const fs = require('fs');

const readData = (file) => JSON.parse(fs.readFileSync(file));
const writeData = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

const createBlog = (req, res) => {
  const { title, slug, content, tags } = req.body;
  let blogs = readData('database/blog.json');
  
  const newBlog = { id: blogs.length + 1, title, slug, content, tags, comments: [] };
  blogs.push(newBlog);
  writeData('database/blog.json', blogs);
  res.status(201).send('Blog created');
};

const getBlogs = (req, res) => {
  let blogs = readData('database/blog.json');
  res.status(200).json(blogs);
};

const updateBlog = (req, res) => {
  const { id } = req.params;
  const { title, slug, content, tags } = req.body;
  let blogs = readData('database/blog.json');
  
  const blogIndex = blogs.findIndex(b => b.id == id);
  if (blogIndex === -1) return res.status(404).send('Blog not found');
  
  blogs[blogIndex] = { ...blogs[blogIndex], title, slug, content, tags };
  writeData('database/blog.json', blogs);
  res.status(200).send('Blog updated');
};

const deleteBlog = (req, res) => {
  const { id } = req.params;
  let blogs = readData('database/blog.json');
  
  const updatedBlogs = blogs.filter(b => b.id != id);
  if (updatedBlogs.length === blogs.length) return res.status(404).send('Blog not found');
  
  writeData('database/blog.json', updatedBlogs);
  res.status(200).send('Blog deleted');
};

const addComment = (req, res) => {
  const { id } = req.params;
  const { user_id, comment } = req.body;
  let blogs = readData('database/blog.json');
  
  const blogIndex = blogs.findIndex(b => b.id == id);
  if (blogIndex === -1) return res.status(404).send('Blog not found');
  
  blogs[blogIndex].comments.push({ user_id, comment });
  writeData('database/blog.json', blogs);
  res.status(201).send('Comment added');
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog, addComment };

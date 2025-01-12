const express = require('express');
const userRoutes = require('./routes/user.router');
const blogRoutes = require('./routes/user.blog.router');
const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

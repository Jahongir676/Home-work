const fs = require('fs');

const readData = (file) => JSON.parse(fs.readFileSync(file));

const authenticateUser = (req, res, next) => {
  const { username, password } = req.body;
  let users = readData('database/users.json');

  const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
  if (!user) return res.status(401).send('Invalid credentials');
  
  req.user = user;
  next();
};

module.exports = { authenticateUser };

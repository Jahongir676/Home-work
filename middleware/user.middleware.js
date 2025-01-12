const fs = require('fs');

const readData = (file) => JSON.parse(fs.readFileSync(file));

const checkUserExists = (req, res, next) => {
  const { identifier } = req.params;
  let users = readData('database/users.json');
  
  const user = users.find(u => u.username === identifier || u.email === identifier);
  if (!user) return res.status(404).send('User not found');
  
  req.user = user;
  next();
};

module.exports = { checkUserExists };

const fs = require('fs');
const readData = (file) => JSON.parse(fs.readFileSync(file));
const writeData = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

const registerUser = (req, res) => {
  const { username, password, fullName, age, email, gender } = req.body;
  let users = readData('database/users.json');
  
  if (users.some(u => u.username === username || u.email === email)) return res.status(400).send('Username or email already exists');
  if (username.length < 3 || password.length < 5 || age < 10 || (fullName && fullName.length < 10)) return res.status(400).send('Validation error');
  
  const newUser = { id: users.length + 1, username, password, fullName, age, email, gender };
  users.push(newUser);
  writeData('database/users.json', users);
  res.status(201).send('User registered');
};

const loginUser = (req, res) => {
  res.status(200).send('Login successful');
};

const getUserProfile = (req, res) => {
  const { identifier } = req.params;
  let users = readData('database/users.json');
  
  const user = users.find(u => u.username === identifier || u.email === identifier);
  if (!user) return res.status(404).send('User not found');
  
  res.status(200).json(user);
};

const updateUserProfile = (req, res) => {
  const { identifier } = req.params;
  const { username, fullName, age, email, gender } = req.body;
  let users = readData('database/users.json');
  
  const userIndex = users.findIndex(u => u.username === identifier || u.email === identifier);
  if (userIndex === -1) return res.status(404).send('User not found');
  
  users[userIndex] = { ...users[userIndex], username, fullName, age, email, gender };
  writeData('database/users.json', users);
  res.status(200).send('Profile updated');
};

const deleteUserProfile = (req, res) => {
  const { identifier } = req.params;
  let users = readData('database/users.json');
  
  const updatedUsers = users.filter(u => u.username !== identifier && u.email !== identifier);
  if (updatedUsers.length === users.length) return res.status(404).send('User not found');
  
  writeData('database/users.json', updatedUsers);
  res.status(200).send('Profile deleted');
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile };

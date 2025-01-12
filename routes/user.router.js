
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
async function readUsersFile() {
  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users file:', error);
    return [];
  }
}
async function writeUsersFile(users) {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error writing users file:', error);
  }
}
router.get('/', async (req, res) => {
  const users = await readUsersFile();
  res.json(users);
});
router.get('/:id', async (req, res) => {
  const users = await readUsersFile();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
  }
});
router.post('/', async (req, res) => {
  const users = await readUsersFile();
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    ...req.body
  };
  users.push(newUser);
  await writeUsersFile(users);
  res.status(201).json(newUser);
});
router.put('/:id', async (req, res) => {
  const users = await readUsersFile();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body, id: users[index].id };
    await writeUsersFile(users);
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
  }
});
router.delete('/:id', async (req, res) => {
  const users = await readUsersFile();
  const filteredUsers = users.filter(u => u.id !== parseInt(req.params.id));
  if (users.length !== filteredUsers.length) {
    await writeUsersFile(filteredUsers);
    res.json({ message: 'Foydalanuvchi o\'chirildi' });
  } else {
    res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
  }
});
module.exports = router;

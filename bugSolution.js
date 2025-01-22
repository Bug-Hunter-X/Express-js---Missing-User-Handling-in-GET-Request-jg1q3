const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUserDetails(userId); // Asynchronous operation
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Placeholder for database interaction
async function getUserDetails(userId) {
  //Simulate fetching data from DB
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [{
        id: '1',
        name: 'John Doe'
      }, {
        id: '2',
        name: 'Jane Smith'
      }];
      resolve(users.find(user => user.id === userId));
    }, 500);
  });
}

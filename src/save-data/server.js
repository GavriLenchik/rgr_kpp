// server.js
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/save-data', (req, res) => {
  const data = req.body;
  fs.writeFile('data.txt', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.send('Data saved successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
const express = require('express');
const app = express();

// Endpoint 1: GET request
app.get('/api/endpoint1', (req, res) => {
  // Handle the GET request for endpoint 1
  res.send('This is Endpoint 1');
});

// Endpoint 2: POST request
app.post('/api/endpoint2', (req, res) => {
  // Handle the POST request for endpoint 2
  res.send('This is Endpoint 2');
});

// Endpoint 3: PUT request
app.put('/api/endpoint3', (req, res) => {
  // Handle the PUT request for endpoint 3
  res.send('This is Endpoint 3');
});

// Endpoint 4: DELETE request
app.delete('/api/endpoint4', (req, res) => {
  // Handle the DELETE request for endpoint 4
  res.send('This is Endpoint 4');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

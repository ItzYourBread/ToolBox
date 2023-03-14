import express from 'express';

// create a new express application
const app = express();

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

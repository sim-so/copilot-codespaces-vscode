// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// GET
app.get('/comments', db.getComments);
app.get('/comments/:id', db.getCommentById);

// POST
app.post('/comments', db.createComment);

// PUT
app.put('/comments/:id', db.updateComment);

// DELETE
app.delete('/comments/:id', db.deleteComment);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load comments from file
let comments = [];
if (fs.existsSync('comments.json')) {
  comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
}

// Save comments to file
function saveComments() {
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// GET comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
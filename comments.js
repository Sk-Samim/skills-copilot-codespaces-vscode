// Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

// Load comments module
var comments = require('./comments');

// Get all comments
app.get('/comments', function(req, res) {
    res.json(comments.getComments());
});

// Add a comment
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.addComment(comment);
    res.json(comment);
});

// Create server
var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port);
});
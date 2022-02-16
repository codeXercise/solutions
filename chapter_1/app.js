// Get needed modules
fs = require('fs');

// Get the file dataset.txt
fs.readFile('dataset.txt', 'utf8', function(err, data) {

    // If there is an error, throw it
    if (err) throw err;

    // Get number of lines
    var lines = data.split('\n').length;

    // Print the number of lines
    console.log(lines - 1);
});
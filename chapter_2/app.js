// Get needed modules
fs = require('fs');

// Create the array
var main = {
    "rocket1_fails": 0,
    "rocket2_fails": 0,
    "rocket3_fails": 0,
    "rocket4_fails": 0,
    "rocket5_fails": 0,
    "rocket6_fails": 0,
    "rocket7_fails": 0,
    "rocket8_fails": 0,
    "rocket9_fails": 0,
    "rocket1_success": 0,
    "rocket2_success": 0,
    "rocket3_success": 0,
    "rocket4_success": 0,
    "rocket5_success": 0,
    "rocket6_success": 0,
    "rocket7_success": 0,
    "rocket8_success": 0,
    "rocket9_success": 0,
}

// Created all needed variables
var max_success = 0;
var max_success_rocketmodel = 0;

// Get the file dataset.txt
fs.readFile('dataset.txt', 'utf8', function(err, data) {

    // If there is an error, throw it
    if (err) throw err;

    // Split the data into lines
    var lines = data.split('\n');

    // Get the number of lines
    var lines_num = lines.length;

    // Loop through the lines
    for (var i = 1; i < lines_num; i++) {

        // Get current line
        var line = lines[i];

        // Split the line at "-"
        var line = line.split('-');

        // Get the rocketmodel
        var rocketmodel = line[0];

        // Get success status
        var success = line[2];

        if (success == 1) {

            // Add 1 to the success counter of the rocketmodel
            main["rocket" + rocketmodel + "_success"] += 1;
        } else if (success == 0) {

            // Add 1 to the success counter of the rocketmodel
            main["rocket" + rocketmodel + "_fails"] += 1;
        }
    };

    // Loop through the rocketmodels
    for (var i = 1; i < 10; i++) {

        // Get the current rocketmodel
        var rocketmodel = "rocket" + i + "_success";

        // Get the current success
        var success = main[rocketmodel];

        // Check if the current success is bigger than the current max
        if (success > max_success) {

            // Set the current success as the new max
            max_success = success;

            // Set the current rocketmodel as the new max rocketmodel
            max_success_rocketmodel = i;
        }
    }

    // Print out the results
    console.log("Die Rakete mit den meisten erfolgreichen test, war model: " + max_success_rocketmodel);
});
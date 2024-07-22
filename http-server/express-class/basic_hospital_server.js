const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// GET endpoint to retrieve kidney health status
app.get("/", function (req, res) {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    // Count the number of healthy kidneys
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    // Respond with the kidney health status
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// POST endpoint to add a new kidney status
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Done!"
    });
});


// PUT endpoint to mark all kidneys as healthy
app.put("/", function (req, res) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true; // Mark each kidney as healthy
    }
    res.json({});
});

// DELETE endpoint to remove all unhealthy kidneys
app.delete("/", function (req, res) {
    // Only proceed if there is at least one unhealthy kidney
    if (isThereAtLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                });
            }
        }
        user[0].kidneys = newKidneys;
        res.json({
            msg: "Done!"
        });
    } else {
        // Respond with error if no unhealthy kidneys found
        res.status(411).json({
            msg: "You have 0 bad kidneys"
        });
    }
});

// Function to check if there is at least one unhealthy kidney
function isThereAtLeastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}

// Start the server on port 3000
app.listen(3000);

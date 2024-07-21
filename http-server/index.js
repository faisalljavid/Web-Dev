const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

// GET request
// app.get('/', function (req, res) {
//     res.send("Things are going bad");
// });

// POST request
app.post('/backend-api/conversations', function(req, res) {
    const message = req.body.message;
    // machine learning thing here
    console.log(message)
    res.json({
        output: "2 + 2 = 4"
    })
})




app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
})

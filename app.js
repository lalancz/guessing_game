const express = require("express");const app = express();app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    app.use('/static', express.static(__dirname + '/public'));
});app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Assets'));
//Data
var tables = [{
    name: "Ezra"
}];
var waitlist = [{
}];
//Routes getters
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservationForm", function (req, res) {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// post route


app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    var newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});

app.post("/api/waitlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    var newWait = req.body;

    console.log(newWait);

    tables.push(newWait);

    res.json(newWait);
});



function fulltable() {
    app.post("/api/waitlist", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware

        var newWait = req.body;

        console.log(newWait);

        tables.push(newWait);

        res.json(newWait);

    });
}


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
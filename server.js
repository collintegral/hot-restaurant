const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const tableList = [];
const waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tablelist", (req, res) => {
    return res.json(tableList);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitList);
});
    
app.post("/api/tablelist", (req, res) => {
    if (tableList.length >= 5) {
        waitList.push(req.body);
        res.json("You've been added to the wait list.");
    }
    else {
        tableList.push(req.body);
        res.json("You get a table!");
    }
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
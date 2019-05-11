const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const tableList = [
    { table: "Test" }
];
const waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
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
    

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
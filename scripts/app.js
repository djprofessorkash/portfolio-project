/* Primary Web Logic */

// Initialize Necessary Libraries
const express = require("express");
const path = require("path");

// Instantiate Express App
const app = express();

// Define port for local web deployment
let PORT = 3000;

// Get request to load home page of web app
app.get("/", (request, response) => {
    let pathToIndex = path.join(__dirname, "..", "index.html");
    response.sendFile(pathToIndex);
});

// Logs notice upon successful local deployment
app.listen(PORT, () => {
    console.log(`NOTICE: Server running on localhost:${PORT}.`);
});
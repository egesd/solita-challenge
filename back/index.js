const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.use(express.json());

app.listen(3001, () => {
    console.log("Server running on port 3001....");
});

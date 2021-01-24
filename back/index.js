const express = require("express");
const app = express();
const mongoose = require("mongoose");
const NameModel = require("./models/Names");
const fs = require("fs");

mongoose.connect(
    `mongodb+srv://mongodb+srv://egesd:testi123@cluster0.grmyd.mongodb.net/test`,
    {
        useNewUrlParser: true,
    },
    {
        useUnifiedTopology: true,
    }
);
app.get("/read", async (req, res) => {
    NameModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    });
});

app.use(express.json());

app.listen(3001, () => {
    console.log("Server running on port 3001....");
});

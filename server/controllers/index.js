const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res, next) => {
    fs.readFile('../data.json', 'utf8', (err, data) => {
        if (err) throw err;
        games = JSON.parse(data);
        res.send(data);
    })
})

module.exports = router;
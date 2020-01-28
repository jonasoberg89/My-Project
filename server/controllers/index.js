const express = require("express");
const router = express.Router();
const fs = require("fs");

let data;
router.get("/", (req, res, next) => {
    fs.readFile('../data.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        res.send(data);
    })
})

module.exports = router;
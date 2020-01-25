const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/../build")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/../build/index.html"))
})

app.use(require("./controllers"));

app.listen(port,()=>{
console.log(`Server started on ${port}`)
})
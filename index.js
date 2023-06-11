const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");
const bodyParser = require("body-parser");
const compression = require("compression");

app.use(cors());


const port = 4000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server is running on port ${port}!`));

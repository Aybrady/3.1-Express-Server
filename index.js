import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var sentence = "";

app.use(bodyParser.urlencoded({ extended: true}));

function sentenceGenerator(req, res, next) {
    console.log(req.body);
    sentence = req.body["name"] + "'s pet is " + req.body["petname"] + '.';
    next();
}

app.use(sentenceGenerator);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: "a weekday", advice: "It's time to work hard!"});
});

app.post("/submit", (req, res) => {
    res.send(`<h1>${sentence}</h1>`);
});

app.put("/user/brady", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/brady", (req, res) => {
    res.sendStatus(200);
});
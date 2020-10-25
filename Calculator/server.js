const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    // console.log(res);
    res.sendFile(__dirname + "/index.html");
})

app.post("/index.html", function (req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var result = num2 / (num1 * num1);
    res.send("<h1>BMI  is</h1>" + result);
})
app.listen(3000, function () {
    console.log("serverstaer");

});
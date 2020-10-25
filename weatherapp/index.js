const express = require("express");
const { STATUS_CODES } = require("http");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=New Delhi&units=metric&appid=89530341787ff181c20f7631c3ab103b";
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const js = JSON.parse(data);
            console.log(js);
            const temp = js.main.temp;
            const weather = js.weather[0].description;
            const icon = js.weather[0].icon;
            const imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(temp);
            console.log(weather);
            res.write("<img src=" + imgurl + ">");
            res.write("<h1>Temperature in New Delhi is " + temp + " degree celsius</h1 >");
            res.send();
        })

    })
    // res.send("I am Working all good ");
})







app.listen(3000, function () {
    console.log("server is listen");
})
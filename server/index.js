require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const port = 3028;
const controller = require("./controller/message_controller");
const app = express();
const { API_KEY } = process.env;

app.use(body_parser.json());
// app.use(express.static(__dirname + "/../public/build"));

// console.log(process.env);
// console.log(process.env.API_KEY);
// console.log(API_KEY);

app.get("/api/news", controller.read);

app.post("/api/news", controller.create);

app.put("/api/news/:title", controller.update);

app.delete("/api/news/:title", controller.delete);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});

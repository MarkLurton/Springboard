const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ entended: true }));

app.get("/", (req, res) => {
  return res.send("HELLO");
});

app.get("/dogs", function (request, response) {
  return response.send("Dogs go brk brk");
});

app.get("/chickens", (req, res) => {
  res.send("BOCK BOCK BOCK (get request)");
});
app.post("/chickens", (req, res) => {
  res.send("You created a new chicken (not really) (post request)");
});

app.use(() => {
  console.log("THE SERVER GOT A REQUEST");
});

const greetings = {
  en: "hello",
  fr: "bonjour",
  ic: "hallo",
  js: "konnichiwa",
};

app.get("/greet/:language", (req, res) => {
  res.send(greetings[req.params.language]);
});

app.get("/search", (req, res) => {
  const { term, sort } = req.query;
  return res.send(`SEARCH PAGE! Term is: ${term}, sort is: ${sort}`);
});

app.get("/show-me-headers", (req, res) => {
  res.send(req.headers);
});

app.get("/show-language", (req, res) => {
  const lang = req.headers["accept-language"];
  res.send(`Your language preference is ${lang}`);
});

app.post("/register", (req, res) => {
  res.send(`Welcome ${req.body.username}`);
});
app.listen(3000, function () {
  console.log("App on port 3000");
});

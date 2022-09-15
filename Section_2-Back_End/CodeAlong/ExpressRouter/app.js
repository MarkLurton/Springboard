const express = require("express");
const ExpressError = require("./expressError");
const middleware = require("./middleware");
const morgan = require("morgan");

const userRoutes = require("./userRoutes");

const app = express();

app.use(express.json());

// app.use(middleware.logger);
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/secret", middleware.checkForPassword, (req, res, next) => {
  return res.send("I LOVE YOU <3 FOR REAL");
});

app.get("/private", middleware.checkForPassword, (req, res, next) => {
  return res.send("YOU HAVE REACHED THE PRIVATE PAGE. IT IS PRIVATE");
});

// 404 handler
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let message = error.msg;
  res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

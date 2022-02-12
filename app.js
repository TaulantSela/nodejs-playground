const express = require("express");

const app = express();

// add middleware
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In another middleware");
  //   headers are set automatically
  res.send("<h1>Hello from express</h1>");
  res.send({ test: "here" });
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);

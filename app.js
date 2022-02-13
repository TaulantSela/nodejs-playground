const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// const expressHbs = require("express-handlebars");

const app = express();
// EJS
app.set("view engine", "ejs");

// HANDLEBARS
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs", // vec nese e ven hbs ne vend te handlebars
//   })
// );
// app.set("view engine", "hbs");

// PUG
// app.set("view engine", "pug");

//defaults is for view folder (just for demo)
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// access static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path:'' });
});

app.listen(3000);

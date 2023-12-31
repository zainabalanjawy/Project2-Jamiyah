require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const passportConfig = require("./lib/passportConfig");
const passport = require("passport");

//<--import routers-->>

const indexRout = require("./routes/index");
const authRout = require("./routes/auth");
const jamiyahRoute = require("./routes/jamiyah");
const userRoute = require("./routes/user");
const accountRoute = require("./routes/account");

//<--Initalise App-->>
const app = express();
const port = 4007;

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "themightysecret",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 8640000 },
  })
);

app.use(passportConfig.initialize());
app.use(passportConfig.session());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//<--mount routes-->>

app.use("/", indexRout);
app.use("/", authRout);
app.use("/", jamiyahRoute);
app.use("/", userRoute);
app.use("/", accountRoute);

const { updateEndedJamiyahs } = require("./models/history");

setInterval(updateEndedJamiyahs, 24 * 60 * 60 * 1000); // run once a day

app.listen(port, function () {
  console.log("Server running on port 4007");
});

mongoose.connect(process.env.DB,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
)
  .then(function () {
    console.log("mongoDB connected");
  })
  .catch(function (err) {
    console.log("mongoDB error: " + err.message);
  });

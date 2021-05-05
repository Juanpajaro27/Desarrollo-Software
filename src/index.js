//Inializate
const express = require("express");
const { Mongoose } = require("./database");
const morgan = require("morgan");
const engine = require("ejs-mate");
const passport = require("passport");
const path = require("path");
const app = express();
const session = require("express-session");

//Settings
app.set("Port", process.env.Port || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

//Midelware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "proyect-software",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", require("./routes/users.routes"));
app.use("/index/pets", require("./routes/Pets.routes"));

app.listen(app.get("Port"), () => {
  console.log("Server on port 3000");
});

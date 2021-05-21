//Inializate
const express = require("express");
const { Mongoose } = require("./database");
const morgan = require("morgan");
const engine = require("ejs-mate");
const passport = require("passport");
const path = require("path");
const app = express();
const session = require("express-session");
const multer = require("multer");
const { v4: uuid } = require("uuid");
const cors = require("cors");

//Settings
app.set("Port", process.env.Port || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

//Midelware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors);
const storage = multer.diskStorage({
  destination: path.join(__dirname, "images/uploads"),
  filename: (req, file, cb, filename) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
});
app.use(multer({ storage: storage }).single("file"));
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
app.use("/pets", require("./routes/Pets.routes"));

app.listen(app.get("Port"), () => {
  console.log("Server on port 3000");
});

const express = require("express");
const path = require("path");
const app = express();
const { Mongoose } = require("./database");

//Settings
app.set("Port", process.env.Port || 3000);
app.use(express.json());

//Routes
app.use("/users", require("./routes/users.routes"));
app.use("/index/pets", require("./routes/Pets.routes"));

//Public
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("Port"), () => {
  console.log("Server on port 3000");
});

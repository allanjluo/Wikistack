const express = require("express");
const morgan = require("morgan");
//const routes = require("./routes/posts");

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

//app.use("/posts", routes);
app.get("/", (req, res) => {
  console.log("hi");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./views/routes");

const app = express();
//
app.set("views", path.join(__dirname, "views"));

mongoose.connect(
  "mongodb+srv://admin-Gabriel:12351235@cluster0-l8gqo.mongodb.net/ESSENCIA?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(cors());
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);

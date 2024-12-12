const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const EnsureAuthentication = require("./Routes/ensureAuthentication");
const OrderRouter = require("./Routes/OrderRouter");

require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/checkAuth", EnsureAuthentication);
app.use("/orders", OrderRouter); // Order management routes
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

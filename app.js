const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3030;
var ticketRoute = require("././routes/ticket");
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://card-management.s3-website-us-west-2.amazonaws.com",
  })
);
app.use("/api/ticket", ticketRoute);

const portToListen = 3030;
app.listen(port, () => {
  console.log(`Node js Api is listening on port: ${portToListen}`);
});

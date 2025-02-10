/*
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(Server running on port ${port});
});

*/

require("dotenv").config();
const express = require("express");
const serverless = require("@vendia/serverless-express"); // Use this package for Lambda compatibility

const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the app as a Lambda handler
module.exports.handler = serverless(app);

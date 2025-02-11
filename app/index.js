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

/*
#require("dotenv").config();
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
*/

/*
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const serverless = require("@vendia/serverless-express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports.handler = serverless(app);
*/

/*
const serverless = require("@vendia/serverless-express");
const express = require("express");

const app = express();

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

module.exports.handler = serverless(app);

*/


const serverless = require("@vendia/serverless-express");
const express = require("express");

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// GET request
app.get("/", (req, res) => {
  res.json({ message: "Hello, World! (GET request)" });
});

// POST request
app.post("/", (req, res) => {
  res.json({ message: "Hello, World! (POST request)", data: req.body });
});

// Export the app for AWS Lambda
module.exports.handler = serverless(app);


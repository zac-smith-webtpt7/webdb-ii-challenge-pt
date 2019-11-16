const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome to NodeJS for Car Dealers`
  });
});

module.exports = server;

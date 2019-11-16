const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const fruitsRouter = require("../cars/cars-router.js");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use("/api/cars", fruitsRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome to NodeJS for Car Dealers`
  });
});

module.exports = server;

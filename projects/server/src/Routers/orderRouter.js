const express = require("express");
const { orderController } = require("../controllers");
const route = express.Router();
const { readToken } = require("../helpers/jwt");

route.post("/", readToken, orderController.createOrder);
route.post("/test", orderController.test);

module.exports = route;
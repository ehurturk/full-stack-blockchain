const express = require("express");
const controller = require("../controllers/transactions");
// import {
//   getTransaction,
//   makeTransaction,
// } from "../controllers/transactions.js";

const router = express.Router();

// make to the same URL but you can either do get or post
router
  .route("/")
  .get(controller.getTransaction)
  .post(controller.makeTransaction);

module.exports = { router: router };

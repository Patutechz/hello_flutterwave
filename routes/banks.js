const express = require("express");
const {
  getBanks,
  getBranches
} = require("../controllers/bankController");

const router = express.Router();

// Get All banks
router.get("/", getBanks);

// Get bank branches
router.get("/getbranches", getBranches);

module.exports = router;
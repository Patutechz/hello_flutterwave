const express = require("express");
const {
  getBillsCategories,
  validateBill,
  createBill,
  getStatus,
} = require("../controllers/billController");

const router = express.Router();

// Get All bills
router.get("/", getBillsCategories);

// Validate bill
router.get("/validate", validateBill);

// Post a single workout
router.post('/paybill' , createBill);

// Get status
router.get("/getstatus", getStatus);

module.exports = router;
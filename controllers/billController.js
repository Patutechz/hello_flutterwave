require("dotenv").config();
const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

// get all bills
const getBillsCategories = async (req, res) => {
  try {
    const categories = await flw.Bills.fetch_bills_Cat();
    // res.json(categories);
    res.status(200).json(categories);
    // console.log(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// validate bill
const validateBill = async (req, res) => {
  try {
    const payload = {
      "item_code": "MD154",
      "code": "BIL111",
      "customer": "08189810712"
  };

    const response = await flw.Bills.validate(payload);
    res.json(response);
    // res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
    // res.status(400).json({error : error.message});
  }
};

// create bill
const createBill = async (req, res) => {
  try {
    const payload = {
      country: "NG",
      customer: "2348189810712",
      amount: 50,
      recurrence: "ONCE",
      type: "AIRTIME",
      reference: "9300ko984",
    };

    const response = await flw.Bills.create_bill(payload);
    // res.json(response);
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    // console.log(error);
    res.status(400).json({error : error.message});
  }
};

// get status
const getStatus = async (req, res) => {
  try {
    const payload = {
      reference: "9300049404444",
    };

    const response = await flw.Bills.fetch_status(payload);
    res.json(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBillsCategories,
  validateBill,
  createBill,
  getStatus,
};

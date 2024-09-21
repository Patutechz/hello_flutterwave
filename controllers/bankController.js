require("dotenv").config();
const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

// Get Banks
const getBanks = async (req, res) => {
  try {
    const payload = {
      country: "NG", //Pass either NG, GH, KE, UG, ZA or TZ to get list of banks in Nigeria, Ghana, Kenya, Uganda, South Africa or Tanzania respectively
    };
    const response = await flw.Bank.country(payload);
    res.json(response);
    console.log(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getBranches = async (req, res) => {

    try {
        const payload = {
            
            "id":301 //Unique bank ID, it is returned in the call to fetch banks GET /banks/:country
            
        }
        const response = await flw.Bank.branches(payload);
        res.json(response);
        console.log(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getBanks,
    getBranches
  };

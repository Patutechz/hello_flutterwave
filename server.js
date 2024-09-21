require("dotenv").config();

const express = require("express");
const Flutterwave = require('flutterwave-node-v3');
const cors = require("cors");
const billRoutes = require('./routes/bills');
const bankRoutes = require('./routes/banks');


// express app
const app = express();

// flutterwave 
// const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/bills', billRoutes);
app.use('/api/banks', bankRoutes);



// app.get('/bill-categories', async (req, res) => {
//     try {
//         const categories = await flw.Bills.fetch_bills_Cat();
//         res.json(categories);
//         // console.log(categories);
//     } catch (error) {
//         res.status(500).json({message : error.message})
//         console.log(error)
//     }
// });

// app.get('/bill-product', async (req, res) => {
//   try {
//       const payload = {
//         "country" : "NG",
//         "customer" : "+2348162887599",
//         "amount" : 500,
//         "recurrence" : "ONCE",
//         "type" : "AIRTIME",
//         "reference" : "93000ko984"
//       }
//       const response = await flw.Bills.create_bill(payload);
//       res.json(response);
//       // console.log(categories);
//   } catch (error) {
//       res.status(500).json({message : error.message})
//       console.log(error)
//   }
// });

app.listen(process.env.PORT, () => {
  console.log("connected to listening on port", process.env.PORT);
});

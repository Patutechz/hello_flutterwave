require("dotenv").config();

const express = require("express");
const Flutterwave = require("flutterwave-node-v3");
const cors = require("cors");

// express app
const app = express();

// flutterwave
const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// create bill
const createBill = async () => {

    try {
        const payload={
            "country": "NG",
            "customer": "2348189810712",
            "amount": 50,
            "recurrence": "ONCE",
            "type": "AIRTIME",
            "reference": "9300ko984"
        }
        
        const response = await flw.Bills.create_bill(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


createBill();

// get Status
const getStatus = async () => {

    try {
        const payload={
            "reference": "9300049404444",
        }
        
        const response = await flw.Bills.fetch_status(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


getStatus();


// update bills
const updateBills = async () => {

    try {
        const payload = {
            "order_id": "be9c8abf-4611-46e9-85e7-5a2e8c5d7ab3",
            "amount": "3814.13",
            "reference": "FLWTTOT1000000019"
        }

        const response = await flw.Bills.update_bills(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


updateBills();


// validate bill
const validateBill = async () => {

    try {
        const payload = {
            "item_code": "AT099",
            "code": "BIL099",
            "customer": "08038291822"
        }

        const response = await flw.Bills.validate(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


validateBill();


// get bills categories
const getBillsCategories = async () => {

    try {
    
        const response = await flw.Bills.fetch_bills_Cat()
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


getBillsCategories();


// payment agencies
const paymentAgencies = async () => {

    try {
    
        const response = await flw.Bills.fetch_bills_agencies()
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


paymentAgencies();

// amount to be paid
const amountToBePaid = async () => {

    try {

        const payload = {
            "id": "BIL136", //This is the biller's code
            "product_id": "OT150" //This is the item_code for the particular product
        }

        const response = await flw.Bills.amt_to_be_paid(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


amountToBePaid();


// get bills payment
const getBillsPayment = async () => {

    try {

        const payload = {
            "from": "2019-08-01", //This is the start date it can be in any of this formats: YYYY-MM-DDTHH:MM:SSZ or YYYY-MM-DD
            "to": "2020-08-27",
            "page":"1", //This is the page you want to start from.
        }

        const response = await flw.Bills.fetch_bills(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


getBillsPayment();


// products under agency
const productsUnderAgency = async () => {

    try {

        const payload = {
            "id": "BIL136" //This is the biller's code
        }

        const response = await flw.Bills.products_under_agency(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


productsUnderAgency();


// create order
const Createorder = async () => {

    try {

        const payload = {
            "id": "3644",
            "product_id": "OT151",
            "amount": "3500.00",
            "reference": "FLWTTOT1000000029",
            "customer": {
                "name": "emmanuel",
                "email": "emmanuel@x.com",
                "phone_number": "08060811638"
            },
            "fields": [
                {
                    "id": "42107711:42107712",
                    "quantity": "1",
                    "value": "3500"
                },
                {
                    "id": "42107710",
                    "quantity": "1",
                    "value": "t@x.com"
                }
            ]
        }

        const response = await flw.Bills.create_ord_billing(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


Createorder();

app.listen(process.env.PORT, () => {
  console.log("connected to db and listening on port", process.env.PORT);
});

const express = require('express');
const bodyParser = require('body-parser');
const {Client, Environment} = require('square');
const cors = require('cors');

const client = new Client({
    environment: Environment.Sandbox,
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

const app = express();
app.use(bodyParser.json());
/*
req refers to the request object, and contains all the data sent by the client
destructuring
 */
app.post('/process-payment', async (req, res)=>{
const {amount} = req.body;

try {
    const {terminalApi} = client;

    //create a terminal checkout request
    const response = await terminalApi.createTerminalCheckout({
    idempotencyKey: new Date().getTime().toString(),
        checkout: {
        amountMoney:{
            amount: parseInt(amount) *100,
            currency: 'CAD',
        },
            deviceId: 'YOUR_DEVICE_ID'//your square terminal's device id
        }
    });

    if (response.result.checkout){
        res.json({ success: true, checkoutId: response.result.checkout.id});
    }
    else{
        res.status(400).json({success: false, error: 'Failed to initiate payment on the terminal'});
    }

}catch(error){
    console.error(error);
    res.status(500).json({success: false, error: error.message });
}
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

app.use(cors());

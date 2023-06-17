require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//controllers
const { bkashController } = require('./bkashController');

//app and middleware setup
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true, preflightContinue: true }));
const port = process.env.PORT || 5000;

//setup routing
app.use('/bkash', bkashController);


// Default Get.
app.get('/', (req, res) => {
    res.send('Running MF_House_Server');
});

//start the app
app.listen(port, () => {
    console.log('Server started ' + port)
});

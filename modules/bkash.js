const BkashGateway = require('bkash-payment-gateway');

const bkashConfig = {
	baseURL: process.env.BKASH_CALLBACK_URL,
	key: process.env.BKASH_APP_KEY,
	secret: process.env.BKASH_APP_SECRET,
	username: process.env.BKASH_USERNAME,
	password: process.env.BKASH_PASSWORD,
};

const bkash = new BkashGateway(bkashConfig);
module.exports = bkash;

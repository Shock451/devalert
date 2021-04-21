const _ = require("lodash");
const db = require("./promise").DbAgent;
const secretKey = "not-so-fast";
const paystack = require("paystack")(secretKey);

const Paystack = {
  async pay(req, res) {
    try {
      const data = req.body;
      const amount = 500000; //#5000 Naira
      const email = data.email;
      const response = await paystack.transaction.initialize({ amount, email });
      return res.redirect(response.data.authorization_url);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = Paystack;

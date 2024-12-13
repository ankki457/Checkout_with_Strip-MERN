const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    product: {
      name: String,
      price: Number,
    },
    customerEmail: String,
    chargeId: String,
    receiptUrl: String,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
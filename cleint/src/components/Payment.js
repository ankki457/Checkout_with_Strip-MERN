import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = ({ cart }) => {
  const conversionRate = 75;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity * conversionRate, 0);

  const makePayment = (token) => {
    const body = {
      product: {
        name: "Your Product Name", 
        price: totalAmount, 
      },
      token,
    };

    fetch("http://localhost:5000/api/stripe/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response: ", response);
        return response.json();
      })
      .then((result) => {
        console.log("Payment Success: ", result);
        alert("Payment Successful!");
      })
      .catch((err) => {
        console.error("Payment Error: ", err);
        alert("Payment Failed!");
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Stripe Payment Gateway</h1>
      <div className="card p-4">
        <h2 className="card-title">Total Amount: ₹{totalAmount.toFixed(2)}</h2>
        <StripeCheckout
          stripeKey="pk_test_51QDPsnRtCZ6RGxkBPiNZlkJg5OllVKi083Ci4Wd1zVk4IBqoCrgJ5Qir4ZisA4UefAVrXorntfUVImnTScE9o6vl00gGc2enuq"
          token={makePayment}
          name="Checkout"
          amount={totalAmount * 100}
          shippingAddress
          billingAddress
        >
          <button className="btn btn-primary">Pay Now</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default Payment;
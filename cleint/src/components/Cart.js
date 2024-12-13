import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const navigate = useNavigate();
  const conversionRate = 75; 

  const total = cart.reduce((sum, item) => {
    if (item.price && item.quantity) {
      return sum + item.price * item.quantity * conversionRate;
    }
    return sum; 
  }, 0);

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="card" style={{ padding: '20px', margin: '10px', position: 'relative' }}>
      <div className="card-body">
        <h5 className="card-title">Cart</h5>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <span className="badge bg-primary ms-2">{totalItems}</span>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <p key={item.id}>
              {item.title} x {item.quantity} - ₹{(item.price * item.quantity * conversionRate).toFixed(2)}
            </p>
          ))
        )}
        <h5>Total: ₹{total.toFixed(2)}</h5>
        <button className="btn btn-success" onClick={proceedToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
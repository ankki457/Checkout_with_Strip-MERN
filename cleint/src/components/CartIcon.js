import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import '../App.css';

const CartIcon = ({ cart }) => {
  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="fixed-cart-icon">
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" onClick={goToCart} style={{ cursor: 'pointer' }} />
        <span className="badge bg-primary ms-2">{totalItems}</span>
      </div>
    </div>
  );
};

export default CartIcon;
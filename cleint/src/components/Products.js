import React, { useEffect, useState } from "react";

const Products = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const conversionRate = 75;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {products.map(product => {
        const existingProduct = cart.find(item => item.id === product.id);
        const quantity = existingProduct ? existingProduct.quantity : 0;

        return (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ₹{(product.price * conversionRate).toFixed(2)}</p>
                {quantity > 0 ? (
                  <div className="d-flex align-items-center">
                    <button className="btn btn-secondary" onClick={() => addToCart({ ...product, quantity: -1 })}>-</button>
                    <span className="mx-2">{quantity}</span>
                    <button className="btn btn-secondary" onClick={() => addToCart(product)}>+</button>
                  </div>
                ) : (
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
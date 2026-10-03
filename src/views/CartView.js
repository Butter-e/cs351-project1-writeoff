import React from 'react';
import CartItem from '../components/CartItem';

function CartView({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  setCurrentView
}) {

  const subtotal = cartItems.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="container py-5">

      <h1 className="mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">

          <h3>Your cart is empty.</h3>

          <p className="text-muted">
            Add some stationery to get started.
          </p>

          <button
            className="btn btn-dark"
            onClick={() => setCurrentView('shop')}
          >
            Continue Shopping
          </button>

        </div>
      ) : (
        <div className="row">

          <div className="col-lg-8">

            {cartItems.map((item) => (
              <CartItem
                key={item.cartItemId}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}

          </div>

          <div className="col-lg-4">

            <div className="card">
              <div className="card-body">

                <h4>Order Summary</h4>

                <hr />

                <div className="d-flex justify-content-between">
                  <span>Total Items:</span>
                  <span>{totalItems}</span>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <strong>Subtotal:</strong>
                  <strong>
                    ${subtotal.toFixed(2)}
                  </strong>
                </div>

                <hr />

                <p className="small text-muted">
                  This project does not process real payments.
                </p>

                <button
                  className="btn btn-dark w-100"
                  disabled
                >
                  Checkout
                </button>

              </div>
            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default CartView;
import React from 'react';

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {
  const lineTotal = item.unitPrice * item.quantity;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">

        <div className="col-md-5">
          <div className="d-flex align-items-center gap-3">

            <img
              src={`./images/products/${item.image}`}
              alt={item.name}
              className="cart-item-image"
            />

            <div>
              <h5 className="mb-1">
                {item.name}
              </h5>

              <p className="text-muted mb-1">
                Color: {item.selectedColor}
              </p>

              <p className="text-muted mb-1">
                Option: {item.selectedOption}
              </p>

              <p className="mb-0">
                ${item.unitPrice.toFixed(2)} each
              </p>
            </div>

        </div>
    </div>

          <div className="col-md-4 my-3 my-md-0">
            <p className="mb-2">
              <strong>Quantity</strong>
            </p>

            <div className="d-flex align-items-center gap-2">

              <button
                className="btn btn-outline-secondary"
                onClick={() => decreaseQuantity(item.cartItemId)}
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span className="px-2">
                {item.quantity}
              </span>

              <button
                className="btn btn-outline-secondary"
                onClick={() => increaseQuantity(item.cartItemId)}
                disabled={
                    item.quantity >= item.quantityInStock
                }
              >
                +
              </button>

            </div>

            {item.quantity >= item.quantityInStock && (
              <small className="text-muted d-block mt-2">
                Maximum available quantity reached.
              </small>
            )}

          </div>

          <div className="col-md-3 text-md-end">
            <p className="fw-bold fs-5">
              ${lineTotal.toFixed(2)}
            </p>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeItem(item.cartItemId)}
            >
              Remove
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CartItem;
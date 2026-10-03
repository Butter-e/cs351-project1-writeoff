import React, { useState } from 'react';

function ProductDetailView({
  product,
  setCurrentView,
  addToCart
}) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddToCart = () => {
    if (selectedColor === '' || selectedOption === '') {
      setErrorMessage(
        'Please select a color and product option before adding this item.'
      );
      return;
    }

    if (
      quantity === '' ||
      quantity < 1 ||
      quantity > product.quantityInStock
    ) {
      setErrorMessage(
        `Please enter a quantity between 1 and ${product.quantityInStock}.`
      );
      return;
    }

    addToCart(
      product,
      selectedColor,
      selectedOption,
      quantity
    );

    setErrorMessage('');
    setCurrentView('cart');
  };

  if (!product) {
    return (
      <main className="container py-5">
        <h2>No product selected.</h2>

        <button
          className="btn btn-dark"
          onClick={() => setCurrentView('shop')}
        >
          Return to Shop
        </button>
      </main>
    );
  }

  return (
    <main className="container py-5">

      <button
        className="btn btn-link text-dark ps-0 mb-4"
        onClick={() => setCurrentView('shop')}
      >
        ← Back to Shop
      </button>

      <div className="row">

      <div className="col-md-6 mb-4">
        <div className="product-detail-image-container">

        <img
          src={`/images/products/${product.image}`}
          alt={product.name}
          className="product-detail-image"
        />

        </div>
    </div>

        <div className="col-md-6">

          <p className="text-muted mb-1">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="fs-3 fw-bold">
            ${product.price.toFixed(2)}
          </p>

          <p>{product.description}</p>

          <p>
            <strong>Material:</strong> {product.material}
          </p>

          <p>
            <strong>Rating:</strong> {product.rating} / 5
          </p>

          <p>
            <strong>In Stock:</strong> {product.quantityInStock}
          </p>

          <hr />

          <div className="mb-3">
            <label
              htmlFor="productColor"
              className="form-label"
            >
              Color
            </label>

            <select
              id="productColor"
              className="form-select"
              value={selectedColor}
              onChange={(event) =>
                setSelectedColor(event.target.value)
              }
            >
              <option value="">Select a color</option>

              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="productOption"
              className="form-label"
            >
              Option
            </label>

            <select
              id="productOption"
              className="form-select"
              value={selectedOption}
              onChange={(event) =>
                setSelectedOption(event.target.value)
              }
            >
              <option value="">Select an option</option>

              {product.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="quantity"
              className="form-label"
            >
              Quantity
            </label>

          <input
            id="quantity"
            type="number"
            className="form-control"
            min="1"
            max={product.quantityInStock}
            value={quantity}
            onChange={(event) => {
                const value = event.target.value;

                if (value === '') {
                setQuantity('');
                } else {
                setQuantity(Number(value));
                }
              }}
          />
          </div>

          {errorMessage && (
            <div className="alert alert-danger">
              {errorMessage}
            </div>
          )}

          <button
            className="btn btn-dark btn-lg w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </main>
  );
}

export default ProductDetailView;
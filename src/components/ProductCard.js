import React from 'react';

function ProductCard({
  product,
  setSelectedProduct,
  setCurrentView
}) {

  const handleViewProduct = () => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 product-card">

        <img
          src={`./images/products/${product.image}`}
          className="card-img-top product-card-image"
          alt={product.name}
        />

        <div className="card-body d-flex flex-column">

          <span className="text-muted small">
            {product.category}
          </span>

          <h5 className="card-title mt-2">
            {product.name}
          </h5>

          <p className="card-text">
            {product.description}
          </p>

          <div className="mt-auto">
            <p className="fs-5 fw-bold mb-2">
              ${product.price.toFixed(2)}
            </p>

            <p className="small text-muted">
              Rating: {product.rating} / 5
            </p>

            <button
              className="btn btn-outline-dark w-100"
              onClick={handleViewProduct}
            >
              View Product
            </button>
          </div>

        </div>

        <div className="mb-2">

          {product.newArrival && (
            <span className="badge text-bg-dark me-2">
              New
            </span>
          )}

          {product.featuredProduct && (
            <span className="badge text-bg-secondary">
              Featured
            </span>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
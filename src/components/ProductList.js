import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({
  products,
  setSelectedProduct,
  setCurrentView
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  const indexOfLastProduct =
    currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="row">

        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setSelectedProduct={setSelectedProduct}
            setCurrentView={setCurrentView}
          />
        ))}

      </div>

      {totalPages > 1 && (
        <nav
          className="mt-4"
          aria-label="Product pages"
        >
          <ul className="pagination justify-content-center">

            <li
              className={`page-item ${
                currentPage === 1 ? 'disabled' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  changePage(currentPage - 1)
                }
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  currentPage === pageNumber
                    ? 'active'
                    : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    changePage(pageNumber)
                  }
                >
                  {pageNumber}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages
                  ? 'disabled'
                  : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  changePage(currentPage + 1)
                }
                disabled={
                  currentPage === totalPages
                }
              >
                Next
              </button>
            </li>

          </ul>
        </nav>
      )}
    </>
  );
}

export default ProductList;
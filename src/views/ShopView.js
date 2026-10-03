import React from 'react';
import ProductList from '../components/ProductList';

function ShopView({
  products,
  setSelectedProduct,
  setCurrentView
}) {
  return (
    <main className="container py-5">

      <div className="text-center mb-5">
        <h1>Shop WriteOff</h1>

        <p className="lead">
          Pens, pencils, notebooks, paper, and everything
          you need to put your ideas down on paper.
        </p>
      </div>

      <ProductList
        products={products}
        setSelectedProduct={setSelectedProduct}
        setCurrentView={setCurrentView}
      />

    </main>
  );
}

export default ShopView;
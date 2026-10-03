import React from 'react';

function Navbar({ currentView, setCurrentView, cartCount }) {

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">

        <button
          className="navbar-brand btn btn-link text-decoration-none text-dark"
          onClick={() => navigateTo('home')}
        >
          <strong>WriteOff</strong>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#writeoffNavbar"
          aria-controls="writeoffNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="writeoffNavbar"
        >
          <div className="navbar-nav ms-auto">

            <button
              className={`nav-link btn ${
                currentView === 'home' ? 'active' : ''
              }`}
              onClick={() => navigateTo('home')}
            >
              Home
            </button>

            <button
              className={`nav-link btn ${
                currentView === 'shop' ? 'active' : ''
              }`}
              onClick={() => navigateTo('shop')}
            >
              Shop
            </button>

            <button
              className={`nav-link btn ${
                currentView === 'account' ||
                currentView === 'createAccount'
                  ? 'active'
                  : ''
              }`}
              onClick={() => navigateTo('account')}
            >
              Account
            </button>

            <button
              className={`nav-link btn ${
                currentView === 'cart' ? 'active' : ''
              }`}
              onClick={() => navigateTo('cart')}
            >
              Cart ({cartCount})
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
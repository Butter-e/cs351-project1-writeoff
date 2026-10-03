import React, { useState } from 'react';

function AccountView({ setCurrentView }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (login.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter your login and password.');
      return;
    }

    setErrorMessage('');
    alert('Login submitted successfully.');
  };

  return (
    <main className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-7 col-lg-5">

          <div className="card shadow-sm">
            <div className="card-body p-4">

              <h1 className="text-center mb-4">
                Account
              </h1>

              <p className="text-center text-muted">
                Sign in to your WriteOff account.
              </p>

              {errorMessage && (
                <div className="alert alert-danger">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleLogin}>

                <div className="mb-3">
                  <label
                    htmlFor="login"
                    className="form-label"
                  >
                    Login
                  </label>

                  <input
                    type="text"
                    id="login"
                    className="form-control"
                    value={login}
                    onChange={(event) =>
                      setLogin(event.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  Sign In
                </button>

              </form>

              <hr className="my-4" />

              <p className="text-center">
                Don't have an account?
              </p>

              <button
                className="btn btn-outline-dark w-100"
                onClick={() =>
                  setCurrentView('createAccount')
                }
              >
                Create Account
              </button>

            </div>
          </div>

        </div>

      </div>

    </main>
  );
}

export default AccountView;
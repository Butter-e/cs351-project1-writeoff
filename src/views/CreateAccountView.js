import React, { useState } from 'react';

function CreateAccountView({ setCurrentView }) {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.login.trim() === '') {
      newErrors.login = 'Login is required.';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password =
        'Password must be at least 6 characters.';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        'Please enter a valid email address.';
    }

    if (
      formData.state !== '' &&
      !/^[A-Za-z]{2}$/.test(formData.state)
    ) {
      newErrors.state =
        'State must be a 2-letter abbreviation.';
    }

    if (
      formData.zip !== '' &&
      !/^\d{5}$/.test(formData.zip)
    ) {
      newErrors.zip =
        'ZIP code must contain 5 digits.';
    }

    if (
      formData.phone !== '' &&
      !/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)
    ) {
      newErrors.phone =
        'Phone must use the format 555-555-5555.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
      return;
    }

    setErrors({});
    setSuccessMessage(
      'Account information submitted successfully.'
    );
  };

  return (
    <main className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow-sm">
            <div className="card-body p-4">

              <h1 className="mb-2">
                Create Account
              </h1>

              <p className="text-muted mb-4">
                Create your WriteOff account.
                Fields marked with * are required.
              </p>

              {successMessage && (
                <div className="alert alert-success">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <h4 className="mb-3">
                  Account Information
                </h4>

                <div className="mb-3">
                  <label
                    htmlFor="createLogin"
                    className="form-label"
                  >
                    Login *
                  </label>

                  <input
                    id="createLogin"
                    type="text"
                    name="login"
                    className={`form-control ${
                      errors.login ? 'is-invalid' : ''
                    }`}
                    value={formData.login}
                    onChange={handleChange}
                  />

                  {errors.login && (
                    <div className="invalid-feedback">
                      {errors.login}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="createPassword"
                    className="form-label"
                  >
                    Password *
                  </label>

                  <input
                    id="createPassword"
                    type="password"
                    name="password"
                    className={`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                  />

                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    type="text"
                    name="email"
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <hr />

                <h4 className="my-4">
                  Contact Information
                </h4>

                <p className="text-muted">
                  The following fields are optional.
                </p>

                <div className="mb-3">
                  <label
                    htmlFor="street"
                    className="form-label"
                  >
                    Street
                  </label>

                  <input
                    id="street"
                    type="text"
                    name="street"
                    className="form-control"
                    value={formData.street}
                    onChange={handleChange}
                  />
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="city"
                      className="form-label"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      type="text"
                      name="city"
                      className="form-control"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-3 mb-3">
                    <label
                      htmlFor="state"
                      className="form-label"
                    >
                      State
                    </label>

                    <input
                      id="state"
                      type="text"
                      name="state"
                      className={`form-control ${
                        errors.state ? 'is-invalid' : ''
                      }`}
                      maxLength="2"
                      placeholder="CA"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {errors.state && (
                      <div className="invalid-feedback">
                        {errors.state}
                      </div>
                    )}
                    
                  </div>

                  <div className="col-md-3 mb-3">
                    <label
                      htmlFor="zip"
                      className="form-label"
                    >
                      ZIP
                    </label>

                    <input
                      id="zip"
                      type="text"
                      name="zip"
                      className={`form-control ${
                        errors.zip ? 'is-invalid' : ''
                      }`}
                      value={formData.zip}
                      onChange={handleChange}
                    />

                    {errors.zip && (
                      <div className="invalid-feedback">
                        {errors.zip}
                      </div>
                    )}
                  </div>

                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="form-label"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className={`form-control ${
                      errors.phone ? 'is-invalid' : ''
                    }`}
                    placeholder="555-555-5555"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  {errors.phone && (
                    <div className="invalid-feedback">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-dark"
                  >
                    Create Account
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      setCurrentView('account')
                    }
                  >
                    Back to Login
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

    </main>
  );
}

export default CreateAccountView;
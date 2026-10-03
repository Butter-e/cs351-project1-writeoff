import React from 'react';

function HomeView({ setCurrentView }) {
  return (
    <main>

      <section className="writeoff-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <p className="text-uppercase fw-bold hero-label">
                Stationery for every idea
              </p>

              <h1>
                Write it. Draw it.
                <br />
                Make it yours.
              </h1>

              <p className="lead">
                Discover pens, pencils, notebooks, paper,
                and creative supplies designed for students,
                writers, artists, and everyday thinkers.
              </p>

              <button
                className="btn btn-dark btn-lg me-2"
                onClick={() => setCurrentView('shop')}
              >
                Shop Stationery
              </button>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hero-paper">
                <div className="hero-paper-lines">
                  <h3>Ideas start here.</h3>

                  <p>
                    Notes. Sketches. Plans.
                    <br />
                    Whatever comes next.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container py-5">

        <div className="text-center mb-5">
          <h2>Everything you need to create</h2>

          <p className="text-muted">
            Simple tools for school, work, art, and everyday life.
          </p>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="home-category-card h-100">
              <div className="category-icon">
                ✎
              </div>

              <h3>Write</h3>

              <p>
                Pens, pencils, markers, and writing tools
                for notes, assignments, and ideas.
              </p>

              <button
                className="btn btn-link text-dark p-0"
                onClick={() => setCurrentView('shop')}
              >
                Explore writing supplies →
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="home-category-card h-100">
              <div className="category-icon">
                □
              </div>

              <h3>Create</h3>

              <p>
                Sketchbooks, colored pencils, and markers
                for bringing creative ideas to life.
              </p>

              <button
                className="btn btn-link text-dark p-0"
                onClick={() => setCurrentView('shop')}
              >
                Explore creative supplies →
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="home-category-card h-100">
              <div className="category-icon">
                ✓
              </div>

              <h3>Organize</h3>

              <p>
                Notebooks, journals, sticky notes, and paper
                for keeping everything in its place.
              </p>

              <button
                className="btn btn-link text-dark p-0"
                onClick={() => setCurrentView('shop')}
              >
                Explore organization →
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="home-message-section">
        <div className="container text-center py-5">

          <h2>Put your ideas on paper.</h2>

          <p className="mb-4">
            From your first draft to your final sketch,
            WriteOff has the tools to get you started.
          </p>

          <button
            className="btn btn-outline-dark"
            onClick={() => setCurrentView('shop')}
          >
            Browse All Products
          </button>

        </div>
      </section>

    </main>
  );
}

export default HomeView;
import React from 'react'

export default function CategoryHighlight() {
  return (
    <div className="bg-dark">
      <section className="container text-center my-5 bg-dark p-3">
        <h2 className="text-info mb-4">Popular Categories</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card category-card p-2 bg-secondary text-light">
              <span className='fs-5 fw-medium'>Electronics</span>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card category-card p-2 bg-secondary text-light">
              <span className='fs-5 fw-medium'>Fashion</span>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card category-card p-2 bg-secondary text-light">
              <span className='fs-5 fw-medium'>Home</span>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card category-card p-2 bg-secondary text-light">
              <span className='fs-5 fw-medium'>Beauty</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'

export default function DealSection(){
  return (
    <section className="deal-section text-center text-white">
        <h2>Special Deals</h2>
        <p>Limited time offers you don’t want to miss!</p>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card p-3 ">
                <h5>Deal 1</h5>
                <p>$14.99</p>
                <button className="btn btn-info">Shop Now</button>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3 ">
                <h5>Deal 2</h5>
                <p>$24.99</p>
                <button className="btn btn-info">Shop Now</button>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5>Deal 3</h5>
                <p>$34.99</p>
                <button className="btn btn-info">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

import React from 'react'

export default function Testimonial() {
    return (
        <div className="bg-dark">
            <section className="container bg-dark my-5 p-3">
                <h2 className="text-info text-center mb-4">What Our Customers Say</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card testimonial-card p-3 text-center bg-secondary text-light">
                            <p>"Amazing products and great quality!"</p>
                            <small>- Customer 1</small>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card testimonial-card p-3 text-center bg-secondary text-light">
                            <p>"Fast delivery and fantastic support!"</p>
                            <small>- Customer 2</small>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card testimonial-card p-3 text-center bg-secondary text-light">
                            <p>"Love the discounts and special offers!"</p>
                            <small>- Customer 3</small>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

import React from 'react'

export default function FeaturedProducts() {
    return (
        <section className="container my-5">
            <h2 className="text-info text-center mb-4">Featured Products</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card product-card p-3 text-center bg-dark text-light">
                        <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724096910/test/geepzmqyrts1lr2g9ft7.png" className="card-img-top" alt="Product" style={{objectFit: 'contain'}} height={400}/>
                        <h5>Product 1</h5>
                        <p>$19.99</p>
                        <button className="btn btn-info">Add to Cart</button>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card product-card p-3 text-center bg-dark text-light">
                        <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724097010/test/dmjuonjiftgtlulssicl.jpg" className="card-img-top" alt="Product" style={{objectFit: 'contain'}} height={400}/>
                        <h5>Product 1</h5>
                        <p>$19.99</p>
                        <button className="btn btn-info">Add to Cart</button>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card product-card p-3 text-center bg-dark text-light">
                        <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724098142/test/c4bifewwclnf9dzyxwj1.jpg" className="card-img-top" alt="Product" style={{objectFit: 'contain'}} height={400}/>
                        <h5>Product 1</h5>
                        <p>$19.99</p>
                        <button className="btn btn-info">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

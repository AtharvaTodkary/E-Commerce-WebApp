import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer text-center py-4">
            <div className="container">
                <p>Subscribe for updates and exclusive offers!</p>
                <input type="email" className="form-control w-50 mx-auto mb-3" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
                <div className="col-md-12 d-flex justify-content-evenly mt-4">
                    <Link to="#" className="mr-3">Terms of Service</Link>
                    <Link to="#" className="mr-3">Privacy Policy</Link>
                    <Link to="#">Contact Us</Link>
                </div>
            </div>
        </footer>
    )
}

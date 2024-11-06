import React from "react";
import CategoryHighlight from "./CategoryHighlight";
import FeaturedProducts from "./FeaturedProducts";
import DealSection from "./DealSection";
import Testimonial from "./Testimonial";
import Footer from "../utils/Footer";
import Introduction from "./Introduction";

export default function Landing() {
  return (
    <>
    <Introduction/>
      <div className="col-md-12 d-flex justify-content-center">
        <div className="container d-flex justify-content-center align-items-center row">
          <div className="col-12 col-md-10 d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span className="fs-1 fw-bolder">Be inspired by the best.</span>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724095684/test/hd4kjtunzr2yebqvswnt.png"
                alt="Inspiration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <CategoryHighlight />
      <FeaturedProducts />
      <DealSection />
      <Testimonial />
      <Footer />
    </>
  );
}

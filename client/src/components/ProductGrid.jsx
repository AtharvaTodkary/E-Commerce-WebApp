import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { GlobalState } from "../GlobalState";
// import { Link } from "react-router-dom";
export default function ProductGrid() {

  const state = useContext(GlobalState);
  const products = state.productAPI.products;

  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState(products)

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  function resetSearch() {
    setSearchItem('');
    setFilteredData(products);
  }

  function handleSearchItem(e) {
    const item = e.target.value.toLowerCase();
    setSearchItem(item);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(item) ||
      product.description.toLowerCase().includes(item) ||
      product.category.toLowerCase().includes(item) ||
      product.content.toLowerCase().includes(item)
    );

    setFilteredData(filtered);
  }
  // console.log(filteredData)
  return (
    <>
      <div className="col-md-12 d-flex justify-content-center p-3">
        <div className="col-md-10 d-flex justify-content-end">
          <div className="col-md-3 me-5">
            <input
              onChange={handleSearchItem}
              className="form-control me-sm-2"
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
          <span onClick={resetSearch} className="col-md-1 btn btn-danger" id="reload">Reset</span>
        </div>
      </div>
      <div className="d-flex justify-content-center p-3">
        <div className="container">
          <div className="row">

            {filteredData.length !== 0 ?
              filteredData.map((product) => (
                <ProductCard key={product._id} product={product} />
              )) : <div className="container container-fluid col-md-10 d-flex justify-content-center p-5">
                <div className="col-md-8">
                  <div className="fs-1 fw-bolder w-100 text-center ">
                    Item Not Found {':('}
                  </div>
                  <div className="fs-4 text-center">
                    Item <span className="text-danger fw-bolder">{searchItem}</span> Not Available
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

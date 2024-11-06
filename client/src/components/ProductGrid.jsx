import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { GlobalState } from "../GlobalState";

export default function ProductGrid() {
  const state = useContext(GlobalState);
  const products = state.productAPI.products;

  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState(products);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  // Reset search function
  function resetSearch() {
    setSearchItem('');
    setFilteredData(products);
    setCurrentPage(1); 
  }

  // Search function
  function handleSearchItem(e) {
    const item = e.target.value.toLowerCase();
    setSearchItem(item);
    setCurrentPage(1); // Reset to the first page when a new search is made

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(item) ||
      product.description.toLowerCase().includes(item) ||
      product.category.toLowerCase().includes(item) ||
      product.content.toLowerCase().includes(item)
    );

    setFilteredData(filtered);
  }

  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page function
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

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
            {currentItems.length !== 0 ? (
              currentItems.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div className="container container-fluid col-md-10 d-flex justify-content-center p-5">
                <div className="col-md-8">
                  <div className="fs-1 fw-bolder w-100 text-center ">
                    Item Not Found {':('}
                  </div>
                  <div className="fs-4 text-center">
                    Item <span className="text-danger fw-bolder">{searchItem}</span> Not Available
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="d-flex justify-content-center p-3">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button onClick={() => paginate(currentPage - 1)} className="page-link">
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(filteredData.length / itemsPerPage) ? 'disabled' : ''}`}>
              <button onClick={() => paginate(currentPage + 1)} className="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

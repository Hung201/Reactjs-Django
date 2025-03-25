import React, { useState, useEffect } from 'react';
import Book from "../components/Book"
import Breakcrum from "../components/Breakcrum"
import { books } from '../../data.json'
import CardL from "../components/Cardl"
import { getAllProducts } from '../services/apiServices';


function Homepage({ searchQuery }) {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [listProducts, setListProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000000] });


  // useEffect(() => {
  //   fetchListProducts();
  // }, []);

  // const fetchListProducts = async () => {
  //   let res = await getAllProducts();
  //   setListProducts(res)
  // }

  // console.log("check res: ", listProducts)


  useEffect(() => {
    let tempBooks = books;


    // Apply search query filter
    if (searchQuery) {
      tempBooks = tempBooks.filter(book => book.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Apply category filter
    if (filters.category) {
      tempBooks = tempBooks.filter(book => book.category === filters.category);
    }

    // Apply price range filter
    tempBooks = tempBooks.filter(book => book.price >= filters.priceRange[0] && book.price <= filters.priceRange[1]);

    setFilteredBooks(tempBooks);
  }, [searchQuery, filters]);

  const handleFilter = (filterOptions) => {
    setFilters(filterOptions);
  };


  return (
    <>
      <div className="container mt-3">
        <Breakcrum />
        <div className="container">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block mt-2"><CardL /></div>
            <div className="col-lg-10">
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">

                {books.map(book => (
                  <div key={book.id} className="d-flex flex-wrap mt-2">
                    <Book data={book} /></div>))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Homepage;
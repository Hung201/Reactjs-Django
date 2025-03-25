import React, { useState, useEffect } from 'react';
 
function Filter1({ onFilter }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
 
  useEffect(() => {
    // Giả sử chúng ta lấy dữ liệu từ một API hoặc từ một file JSON
    const fetchCategories = async () => {
      const response = await fetch('../../data.json');
      const data = await response.json();
      const categorySet = new Set();
      data.books.forEach(book => {
        if (book.category) {
          categorySet.add(book.category);
        }
      });
      setCategories([...categorySet]);
    };
 
    fetchCategories();
  }, []);
 
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter({ category: e.target.value, priceRange });
  };
 
  const handlePriceChange = (e) => {
    const value = e.target.value.split('-').map(Number);
    setPriceRange(value);
    onFilter({ category: selectedCategory, priceRange: value });
  };
 
  return (
    <div className="filter-container">
      <div className="filter-category">
        <label>Category:</label>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-price">
        <label>Price:</label>
        <select onChange={handlePriceChange}>
          <option value="0-1000000">All</option>
          <option value="0-50000">0 - 50,000</option>
          <option value="50000-100000">50,000 - 100,000</option>
          <option value="100000-200000">100,000 - 200,000</option>
          <option value="200000-500000">200,000 - 500,000</option>
          <option value="500000-1000000">500,000 - 1,000,000</option>
        </select>
      </div>
    </div>
  );
}
 
export default Filter1;
import React, { useState, useEffect } from 'react';
 
function Filter() {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        const categorySet = new Set();
 
        data.books.forEach(book => {
          if (book.categories && book.categories.name) {
            categorySet.add(book.categories.name);
          }
        });
 
        setCategories(Array.from(categorySet));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default Filter;


import React, { useState, useEffect } from 'react';
import Rating from './Rating';
 
function CardL() {
  const [categories, setCategories] = useState([]);
  const [providers, setProviders] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllProviders, setShowAllProviders] = useState(false);
 
  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        const categorySet = new Set();
        const providerSet = new Set();
 
        data.books.forEach(book => {
          if (book.categories && book.categories.name) {
            categorySet.add(book.categories.name);
          }
          if (book.current_seller && book.current_seller.name) {
            providerSet.add(book.current_seller.name);
          }
        });
 
        setCategories(Array.from(categorySet));
        setProviders(Array.from(providerSet));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };
 
  const toggleShowAllProviders = () => {
    setShowAllProviders(!showAllProviders);
  };
 
  return (
    <div className="card d-none d-sm-block m-1" style={{ width: '100%', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', transition: 'transform 0.3s, box-shadow 0.3s' }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ border: 'none' }}>
          <p className="h6 text-secondary" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Danh mục sản phẩm</p>
          {categories.slice(0, showAllCategories ? categories.length : 4).map((category, index) => (
            <p key={index} className="list-unstyled mb-0" style={{ padding: '4px 0' }}>{category}</p>
          ))}
          {categories.length > 4 && (
            <button onClick={toggleShowAllCategories} className="btn btn-link">{showAllCategories ? 'Ẩn bớt' : 'Xem thêm'}</button>
          )}
        </li>
        <li className="list-group-item" style={{ border: 'none' }}>
          <hr style={{ margin: '8px 0', borderColor: 'rgba(0,0,0,0.1)' }} />
          <p className="h6 text-secondary" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Nhà cung cấp</p>
          {providers.slice(0, showAllProviders ? providers.length : 5).map((provider, index) => (
            <div key={index} className="d-flex align-items-center" style={{ padding: '4px 0' }}>
              <input type="checkbox" style={{ marginRight: '8px', border: '1px solid #007bff', borderRadius: '3px' }} />
              <p className="list-unstyled mb-0">{provider}</p>
            </div>
          ))}
          {providers.length > 5 && (
            <button onClick={toggleShowAllProviders} className="btn btn-link">{showAllProviders ? 'Ẩn bớt' : 'Xem thêm'}</button>
          )}
        </li>
        <li className="list-group-item mt-2" style={{ border: 'none' }}>
          <hr style={{ margin: '8px 0', borderColor: 'rgba(0,0,0,0.1)' }} />
          <h6 className="h6 text-secondary" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Đánh giá</h6>
          <ul className="list-unstyled">
            <li className="mt-3">
              <Rating st={5} /> <span> từ 5 sao</span>
            </li>
            <li>
              <Rating st={4} /> <span> từ 4 sao</span>
            </li>
            <li className="mb-3">
              <Rating st={3} /> <span> từ 3 sao</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
 
export default CardL;
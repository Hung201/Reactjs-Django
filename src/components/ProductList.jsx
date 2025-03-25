import React, { useState, useEffect } from 'react';

const loadBooks = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data.books;
};

const ProductList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks().then(setBooks);
  }, []);

  const addToCart = (bookId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const bookInCart = cart.find(item => item.id === bookId);
    if (bookInCart) {
      bookInCart.quantity++;
    } else {
      cart.push({ id: bookId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng');
  };

  if (!books.length) return <p>Loading...</p>;

  return (
    <div>
      <h1>Danh sách sách</h1>
      {books.map(book => (
        <div key={book.id} className="book-item">
          <h2>{book.name}</h2>
          <p>{book.short_description}</p>
          <p>Giá: {book.price} VND</p>
          <p>Đánh giá: {book.rating_average}</p>
          <button onClick={() => addToCart(book.id)}>Thêm vào giỏ hàng</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


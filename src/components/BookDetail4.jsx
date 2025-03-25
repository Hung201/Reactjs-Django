import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { books } from '../../data.json';
import { CartContext } from './CartContext';
import Currency from './Currency';
 
function BookDetail4() {
  const { id } = useParams();
const book = books.find(item => item.id == id);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
 
  if (!book) {
    return <div>Không tìm thấy sách</div>;
  }
 
  const price = book.current_seller.price;
  const total = quantity * price;
  const navigate = useNavigate();
 
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(newQuantity);
  }
 
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }
 
  const handleDecrement = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
  }
 
  const handleBuyNow = () => {
    navigate('/payment');
  }
 
  const handleAddToCart = () => {
addToCart(book.id, book.name, price, quantity);
    alert('Đã thêm vào giỏ');
    navigate('/cart');
  }
 
  return (
    <div className="container mt-5">
      <div className="card border-0 p-3 ">
        <div className="mb-3 d-none d-md-block">
          <p className='fw-bold h'>Số Lượng</p>
         
 <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <button 
          className="btn btn-outline-secondary flex-fill me-2" 
          type="button" 
          onClick={handleDecrement}
        >
          -
        </button>
        <input 
          type="number" 
          className="form-control text-center flex-fill me-2 mt-3" 
          placeholder="1" 
          aria-label="1" 
          value={quantity} 
          onChange={handleQuantityChange}
        />
        <button 
          className="btn btn-outline-secondary flex-fill" 
          type="button" 
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    
        </div>
        <div className="mb-3 d-none d-md-block ">
          <p className='fw-bold h'>Tạm tính</p>
          <span className="card-text fw-medium fs-4">
            <Currency val={total} />
          </span>
        </div>
       
        <button className="btn btn-danger btn-block mb-2" onClick={handleAddToCart}>Mua ngay</button>
        <button className="btn btn-outline-primary btn-block mb-2" onClick={handleAddToCart}>Thêm vào giỏ</button>
        <button className="btn btn-outline-primary btn-block d-none d-lg-block">Mua trước trả sau</button>
      </div>
    </div>
  );
}
 
export default BookDetail4;

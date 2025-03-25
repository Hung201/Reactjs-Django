import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import Currency from '../components/Currency';
import { useNavigate } from "react-router-dom";
 
function Cart() {
  const { cartItems, removeFromCart, getTotalItems } = useContext(CartContext);
  const navigate = useNavigate();

const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    alert('Đã xoá');
  };

const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 
  return (

<>
      <div className="container mt-3">
        <h2>Giỏ hàng của bạn</h2>
        {cartItems.length === 0 ? (
          <>
            <p>Giỏ hàng của bạn đang trống</p>
            {/* Nút tiếp tục mua hàng */}

 <button onClick={() => navigate("/")} className="btn btn-outline-success btn-sm w-50">Tiếp tục mua hàng</button>
          </>
        ) : (
          <>

<div className="card p-3">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-3">
                  <button className="btn btn-danger btn-sm" onClick={()=> handleRemoveFromCart(item.id)}>Xoá</button>
                 

<h6>{item.name}</h6>

<p>Đơn giá: <Currency val={item.price} /></p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Tổng: <Currency val={item.price * item.quantity} /></p>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <h4 className="text-danger px-3"> Tổng: <Currency val={totalAmount} /></h4>
            </div>
            <div

className="container flex justify-around mb-5">
              <button onClick={() => navigate("/")} className="btn btn-outline-success btn-sm w-50"> Tiếp tục mua hàng </button>

<button onClick={()=> navigate('/payment')} className="btn btn-outline-info btn-sm w-50"> Thanh toán </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
 
export default Cart;

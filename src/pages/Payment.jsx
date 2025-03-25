import React, { useContext , useState} from 'react';
import { CartContext } from '../components/CartContext';
import Currency from '../components/Currency';
import { useNavigate } from "react-router-dom";
import'./Payment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';


function Payment() {

  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);


  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  

return (

    
    <div className="container mt-5">

      <div className="position-relative">

        <div className="page-header pt-2 border-radius-xl">

          <div className="container h-100 px-7">

            <div className="row">

              <div className="col-lg-7 mt-auto mb-3">

                <p className="mb-0">

                  <a className="text-primary h6 " onClick={()=> navigate("/")}><FontAwesomeIcon icon={faHome} />Trang chủ</a>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
  
       

 <h2 className="mb-4">Thanh Toán</h2>

      {cartItems.length === 0 ? (

        <p>Giỏ hàng của bạn đang trống</p>

      ) : (

        <div className="card p-3 mb-4">

          {cartItems.map((item) => (

            <div key={item.id} className="mb-3">

              <h6>{item.name}</h6>

              <p>Đơn giá: <Currency val={item.price} /></p>

              <p>Số lượng: {item.quantity}</p>

              <p>Tổng: <Currency val={item.price * item.quantity} /></p>

            </div>

          ))}

          <div className="mt-3">


 <h4 className="text-danger px-3"> Tổng: <Currency val={totalAmount} /></h4>

          </div>

        </div>

      )}


      <form>

        <div className="mb-3">

          <label htmlFor="name" className="form-label">Họ tên người mua</label>

          <input type="text" className="form-control" id="name" placeholder="Nhập họ và tên" required />

        </div>


<div className="mb-3">

          <label htmlFor="address" className="form-label">Địa chỉ nhận hàng</label>

          <input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ" required />

        </div>

        <div className="mb-3">

          <label htmlFor="phone" className="form-label">Số điện thoại nhận hàng</label>

          <input type="text" className="form-control" id="phone" placeholder="Nhập số điện thoại" required />

        </div>

        <div className="mb-3">

          <label htmlFor="payment" className="form-label">Phương thức thanh toán</label>

          <select className="form-select" id="payment" aria-label="Example select with button addon" required >

            <option value="">Lựa chọn...</option>

            <option value="1">Thanh toán khi nhận hàng</option>

            <option value="3">Thanh toán qua tài khoản ngân hàng</option>

            <option value="4">Thanh toán qua thẻ Tín dụng/Ghi nợ</option>

          </select>

        </div>

        <div className="mb-3">

          <label htmlFor="transport" className="form-label">Phương thức vận chuyển</label>

          <select className="form-select" id="transport" aria-label="Example select with button addon" required >

            <option value="">Lựa chọn...</option>

            <option value="1">Giao hàng nhanh</option>

            <option value="2">Giao hàng tiết kiệm</option>

            <option value="3">Giao hàng hỏa tốc</option>

          </select>

        </div>


   <button type="submit" className="btn btn-primary btn-block" onClick={()=> alert('Thanh toán thành công')}>Thanh Toán</button>

      </form>

    </div>

  );

}


export default Payment;

import React, { useContext, useState } from 'react';
import {Navbar,Nav,Container} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faUser, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from './CartContext';

import { useNavigate } from 'react-router-dom';
import Search from './Search';
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCartClick=()=>{navigate('./cart')};
  return (
    <nav className="navbar navbar-expand-lg  shadow-sm">
      <div className='container-fluid row'>
      <style>{`
       
       /*chỉnh phần số trên icon giỏ hàng*/
        .cart-icon .badge { font-size: 12px; padding: 4px 6px; }

        /*chỉnh viền khung input*/
        .search-container { display: flex; align-items: center; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; width: 100%; max-width: 100%; padding: 0px; position: relative; }
       
        /*chỉnh phần content trong khung input*/
        .search-container span { margin-left: 10px; }
        
        
        .search-container input {  border: none; outline: none; padding: 0.001rem 0.2rem;  }
        .search-container button { border: none; background: none; white-space: nowrap; }
        
        /*logo tiki*/
        .navbar-brand { display: flex; justify-content: center; align-items: center; text-align: center; font-size: 75%; }
        
        .navbar { padding: 0.5rem 1rem; }
       
        
        /*làm cho logotiki biến mất*/
        @media (max-width: 991px) { 
          .navbar-brand { display: none; }
          .search-container { max-width: 80%; }
          .navbar{
            background-color:dodgerblue;
           }
          
           .search-container{
            background-color:white;
            
           }
     
           .navbar-toggler{
            background-color:white;
           }
                       
        }

       
        }
      
    
      `}</style>
   

      <div className="d-flex align-items-center">

        <div className="col-lg-2 justify-content-center">
          <a className="navbar-brand" href="/">
            <img src="https://th.bing.com/th/id/OIP.STHttdQXpFk8VQSV9pUB_wAAAA?rs=1&pid=ImgDetMain" alt="Tiki Logo" height="70" />
          </a>
        </div>

        <div className={`collapse navbar-collapse col-lg-7 d-flex  ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <Search/>
        </div>

        <div className="col-lg-3  d-flex justify-content-end">
          <Navbar expand="lg" variant="light" >
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-2 align-items-center">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} /> Trang chủ
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <FontAwesomeIcon icon={faUser} /> Tài khoản
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        
          <a className="nav-link d-flex cart-icon btn btn-primary p-1 " onClick={handleCartClick}>{getTotalItems()  && <span className="badge bg-danger">{getTotalItems()}</span>}
            <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
            
          </a>
          
        

      </div>
      </div>
    </nav>
    



 
  );
}

export default Header;


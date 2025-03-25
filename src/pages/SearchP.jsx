import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import data from'../../data.json'
 
function SearchResult({searchTerm}){
    
   
// Filter products based on search term
  const searchResults = data.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
 
  return (
    <Container className="my-4">
      <h2>Kết quả tìm kiếm cho "{searchTerm}"</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {searchResults.length === 0 ? (
          <Col>
            <p>Không tìm thấy kết quả phù hợp.</p>
          </Col>
        ) : (
          searchResults.map(product =>(<Col key={product.id}>
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Giá: {product.price}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
 
export default SearchResult;
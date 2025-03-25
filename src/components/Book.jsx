import { Link } from 'react-router-dom'
import Rating from './Rating';
import Currency from './Currency';
 
function Book(props) {
  return (
      <Link to={'book/' + props.data.id} className="card mt-1 border-0 text-decoration-none shadow" style={{ width: '100%' }}>
        <div className="card-img-top" style={{ paddingTop: '100%', position: 'relative' }}>
          <img src={props.data.images[0].base_url} alt={props.data.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
   
        <div className="mt-2 mb-0 card-body">
       
        <h6>{props.data.name}</h6>
 
        <div className="card-subtitle" style={{ fontSize: '0.875rem' }}>
          <span className='border-end pe-1'>
            <Rating st={props.data.rating_average} />
          </span>
          <span className='text-secondary fw-light ps-1'>
            {props.data.quantity_sold ? props.data.quantity_sold.text : ''}
          </span>
        </div>
      </div>
      <p className="card-text fw-medium fs-4 ms-3 mb-4" style={{ fontSize: '1.25rem' }}>
        <Currency val={props.data.list_price} />
      </p>
      <div className="card-footer bg-white text-center text-body-secondary">
        Giao siêu tốc 2h
      </div>
    </Link >
  );
}
 
export default Book;

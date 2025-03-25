import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import required icons
 
function Breakcrum() {
  return (
    <div>
      <a href="#" className="text-decoration-none text-secondary fs-5">
        Trang chủ <FontAwesomeIcon icon={faChevronRight} />
      </a>
      <a href="/" className="text-decoration-none text-dark-emphasis ps-1 fs-5">
        Nhà sách Tiki
      </a>
    </div>
  );
}
 
export default Breakcrum;

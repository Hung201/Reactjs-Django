import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
 
function Rating(props) {
  const star = [];
 
  if (props.st === 0) {
    return null; // Return null if the rating is zero
  }
 
  for (let i = 1; i <= props.st; i++) {
    star.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFD43B" }} />
    );
  }
 
  while (star.length < 5) {
    star.push(
      <FontAwesomeIcon key={star.length + 1} icon={faStar} style={{ color: "#d6d6d6" }} />
    );
  }
 
  return <div>{star}</div>;
}
 
export default Rating;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
 
const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
 
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };
 
  return (
    <form className="mx-auto my-2 my-lg-0 search-container" onSubmit={handleSearch}>
      <span><FontAwesomeIcon icon={faSearch} /></span>
      <input
        className="form-control pt-3 shadow-none"
        type="search"
        placeholder="Freeship đến 30K"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn text-primary btn-light" type="submit">Tìm kiếm</button>
    </form>
  );
};
 
export default Search;
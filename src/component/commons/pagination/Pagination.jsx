import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const {totalMovies,currentPage, perPageLimit, onPageChange} = props;
  const numOfPages = Math.ceil(totalMovies/perPageLimit);
  if(numOfPages===1) return null;
  let pages = [...Array(numOfPages).keys()];
  pages =pages.map(page=>page+1);
  return (
    <div className="flex justify-center align-center">
      <ul className='list-none'>
        {pages && pages.length > 0 && pages.map(page=>{
          return (
          <li 
          key={page}
          className='inline'
          ><button
          onClick={()=>onPageChange(page)}
          className={page===currentPage?'btn btn-primary m-1':'btn btn-secondary m-1'}
          >{page}</button></li>
          );
        })}
      </ul>
    </div>
  );
};
Pagination.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPageLimit: PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired
};
 
export default Pagination;
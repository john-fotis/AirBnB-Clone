import React from 'react'

const Pagination = ({resultsPerPage, totalResults, paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults/resultsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ width: 'fit-content', margin:'auto', display: 'flex'}}>
        {currentPage > 1 && (
          <li key= 'first-page' className='page-item'>
            <button className='page-link'
              onClick = {() => paginate(1)} >
              First
            </button>
          </li>
        )}
        {currentPage > 1 && (
          <li key= 'previous-page' className='page-item'>
            <button className='page-link'
              onClick = {() => paginate(currentPage-1)} >
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button className='page-link'
              onClick = {() => paginate(number)} >
              {number}
            </button>
          </li>
        ))}
        {currentPage < (pageNumbers.length) && (
          <li key= 'next-page' className='page-item'>
            <button className='page-link'
              onClick = {() => paginate(currentPage+1)} >
              Next
            </button>
          </li>
        )}
        {currentPage === (pageNumbers.length-1) && (
          <li key= 'last-page' className='page-item'>
            <button className='page-link'
              onClick = {() => paginate(pageNumbers.length)} >
              Last
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination;
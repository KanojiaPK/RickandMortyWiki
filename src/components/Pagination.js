import React from 'react'
import ReactPaginate from 'react-paginate';
import "./Pagination.css"

const Pagination = ({ info, setpagenumber , pagenumber}) => {

  
  return(<ReactPaginate 
    className='pagination justify-content-center gap-3 my-4'
     nextLabel="Next" 
     previousLabel="Prev"

     nextClassName="btn btn-light"
     previousClassName="btn btn-light"
    
     pageClassName='page-item'
     pageLinkClassName='page-link'
     activeClassName='active'
     onPageChange={(data)=> {
      setpagenumber(data.selected +1);
     }}
      pageCount={info?.pages}/>
     );
}; 

export default Pagination
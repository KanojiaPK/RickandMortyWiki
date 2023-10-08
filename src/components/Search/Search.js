import React from 'react'
import "./Search.css"

const Search = ({setSearch , setpagenumber}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input onChange={e=>{
            setpagenumber(1);
            setSearch(e.target.value);
        }} placeholder='Search for characters' type='text' className="input"/>
        
        <button onClick={e=>{e.preventDefault();}} 
        className='btnShadow btn btn-primary'>Search</button>
   
    </form>
  )
}

export default Search
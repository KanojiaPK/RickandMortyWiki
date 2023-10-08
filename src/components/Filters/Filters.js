import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'


const Filters = ({setStatus , setpagenumber , setGender , setSpecies}) => {
  
  let clear=()=>{

    setStatus(""); 
    setpagenumber("");
    setGender(""); 
    setSpecies("");
    window.location.reload(false)
  };
    
  
  return (
<div className="col-3">
 <div className='text-center fw-bold fs-4 mb-2'> Filter</div>
  <div 
  onClick={clear}
  style={{cursor: "pointer "}} 
  className='text-center text-primary text-decoration-underline'>
      Clear Filter
 </div>               
<div><div className="accordion" id="accordionExample">
<Status setStatus={setStatus} setpagenumber={setpagenumber}/>
<Species setSpecies={setSpecies} setpagenumber={setpagenumber}/>
<Gender setGender={setGender}  setpagenumber={setpagenumber} />
</div></div>  
      
      
    </div>
    
  );
  
};

export default Filters
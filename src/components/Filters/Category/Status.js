 import React from 'react'
 import FilterBtn from './FilterBtn';
 const Status = ({setStatus , setpagenumber}) => {
  
let status= ["Alive","Dead","Unknown"];     
   return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
      
        {status.map((items,index)=>(<FilterBtn 
            key={index}
            name="status"
            index={index}
            items={items}
            setpagenumber={setpagenumber}
            task={setStatus}


        />))}
     
      </div>
    </div>
  </div>
   )
 }
 
 export default Status
import React  from "react";
import "./Card.css";


function Card({name , status ,species , image , location }){
   
    return(

        
       <div className="col-4 postion-relative">    
       <div className=" m-2 ">
          <div className="card" style={{backgroundColor:'#a9d3e9'}} >
      <div className="row ">
      
            <img  className="img img-fluid" src={image}  alt="character" />
            <div className="card-body">
              <p className="fs-4  fw-bold mb-2">{name}</p>
              <p className="card-text fs-6">Species: {species}</p>
              <p className="card-text fs-5">Location: {location.name}</p>
             {(()=>{
                   if(status === "Alive"){
                     return(
                      <div className=" status badge bg-success">{status}</div>
                     );
                   }else if(status === "Dead"){
                      return(
                      <div className=" status badge bg-danger">{status}</div>  
                     );
                   }else{
                      return(
                        <div className=" status badge bg-secondary">{status}</div>
                     );
                   }

             })()}
                   
              
              
            </div>
          </div>
        </div>
      </div>
    </div>

    );   
}

export default Card;
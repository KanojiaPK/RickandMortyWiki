import React, { useEffect, useState } from "react";
import Card from "./components/Cards/Card";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination";
import Search from "./components/Search/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";


function App() {
 let[pagenumber , setpagenumber]= useState(1);
 let[search , setSearch] = useState(""); 
 let[status, setStatus] = useState("");
 let[gender, setGender] = useState("");
 let[species, setSpecies] = useState("");

 let[fetcheddata , updatefecthData]=useState([]);
 let { info } = fetcheddata;  

  
 let API =`https://rickandmortyapi.com/api/character/?page=${pagenumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`; 
  console.log(API)

  useEffect(()=>{
  (async function(){
      let data = await fetch(API).then(res=>res.json())     
      updatefecthData(data);
  })()
 },[API])


  return (
    
    <div className="App">
    <Navbar/>
       <div className="text-center">
                 
        </div>
             <Search 
              setpagenumber={setpagenumber}
              setSearch={setSearch}
             />
            <div className="container">
               <div className="row"> 
             <Filters 
             setGender={setGender} 
             setStatus={setStatus} 
             setSpecies={setSpecies}
             setpagenumber={setpagenumber}/>
             

             
         <div className="col-8">
         <div className="row">
          
         {fetcheddata.results ? fetcheddata.results.map((character)=>(
      <Card
        key={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
        location={character.location}
      
      />
    )) :(<p>Loading.....</p>
    
    )}    
          
        </div>
      </div>
     </div>
        <Pagination
          info={info} 
          setpagenumber={setpagenumber}
          pagenumber={pagenumber}
        />
    </div>
</div>
  

  );
}

export default App;

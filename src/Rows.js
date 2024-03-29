import React, { useState ,useEffect } from "react";
import "./row.css";
import axios from "./axios";


function Rows({title ,fetchUrl,isLargerRow = false}) {
    const [movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
      async function fetchData(){
       const request =await axios.get(fetchUrl);
       setMovies(request.data.results)
       return request;

      }
    
      
      fetchData();
    }, [fetchUrl]);


    


  return ( <div className ="row">
        <h2>{title}</h2>
<div  className="row_posters"> 
{movies.map((movie) => (

    ((isLargerRow && movie.poster_path) || (!isLargerRow && movie.backdrop_path)) && (
        <img className={`row_poster ${isLargerRow && "row_posterLarge"}`} 
               key={movie.id}
          src={`${base_url}${
           isLargerRow ? movie.poster_path : movie.backdrop_path
          }`} alt={movie.name} />



      )  
          
        ))}
</div>
    </div>
  );
}

export default Rows;
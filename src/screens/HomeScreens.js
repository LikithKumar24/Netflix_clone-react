import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import Rows from '../Rows';
import requests from '../requests';

function HomeScreen(){
    return(

        <div className="homescreen">
         <Nav />
         <Banner />

         <Rows
         title ="NETFLIX ORIGINALS"
         fetchUrl={requests.fetchNetflixOriginals}
         isLargerRow
        />
   <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
  
  <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
  
  <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
  
  <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
  <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
  
  <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
  
  <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>



        </div>
    )
}
export default HomeScreen
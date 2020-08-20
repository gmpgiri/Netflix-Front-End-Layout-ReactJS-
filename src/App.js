import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav';

function App() {
  const {fetchTrending, fetchNetflixOrginals, fetchTopRated, fetchComedyMovies, fetchActionMovies, fetchHorrorMovies, fetchRomanceMovies, fetchDocumentaries} = requests;

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORGINALS" fetchUrl={fetchNetflixOrginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
       
    </div>
  );
}

export default App;

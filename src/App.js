import { React } from 'react';
import request from './request';


import Row from './Row';
import Banner from  './Banner';
import Nav from './Nav';
import './Row.css';
import './Nav.css';
import './Banner.css';
import './App.css';


function App() {


  return (
    <div className="App">
     <Nav/>
      <Banner/>
      {/* <Row title='Neflix Originals' fetchUrl ={request.fetchNeflixOriginals}/> */}
      <Row title="Trending" fetchUrl={request.fetchTrending} isLargeRow ={true} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;

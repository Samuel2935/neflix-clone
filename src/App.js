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
  // 52876d08d3e27788cb22d577839a5853
  // const url = 'https://api.themoviedb.org/3/movie/550?api_key=52876d08d3e27788cb22d577839a5853';
  // const url = 'http://www.foxmovies.com/movies/fight-club'

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

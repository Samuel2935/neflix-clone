import React, { useEffect, useState } from 'react';
import axios from './axios';
import request from './request';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchComedyMovies);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n){
    return str?.length > n ?str.substr(0, n-1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        background: `url('https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      {/* title */}
      <div className="bannerContent">
        <h3 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h3>
        <div className="bannerButton">
          <button className="banner_button">play</button>
          <button className="banner_button"> list</button>
        </div>

        <h3 className="banner_description">{ truncate(movie?.overview, 150) }</h3>
      </div>
     <div className='banner_fadeBtn'/>
    </header>
  );
}

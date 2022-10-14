import React, { useEffect, useState } from 'react';
import axios from './axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

// const base_url = 'https://image.tmdb.org/t/p/original/';
const base_url = 'https://image.tmdb.org/t/p/w500/'
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
  
      movieTrailer(movie?.name || movie?.title || movie?.original_title || " ")
        .then((url) => {
          //  const url = ' https://www.youtube.com/watch?v=XtMThy8QKqU';
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(movies);

  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.title}
          />
        ))}
      </div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} ;
    </div>
  );
}

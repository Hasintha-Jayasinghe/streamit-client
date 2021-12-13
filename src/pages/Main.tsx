import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Movie from '../components/Movie';

const Main = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('ip')) return;

    navigate('/');
  }, [navigate]);

  useEffect(() => {
    axios
      .get(`http://${localStorage.getItem('ip')}:4000/movies/all`)
      .then(d => {
        setMovies(d.data.files);
      });
  }, []);

  return (
    <div className="h-screen flex flex-col bg-green-400">
      <Header />

      <div className="h-full grid grid-cols-4 overflow-y-auto gap-5 pl-16">
        {movies.map(movie => {
          return <Movie name={movie} />;
        })}
      </div>
    </div>
  );
};

export default Main;

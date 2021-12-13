import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TVShow from '../components/TVShow';

const TvShows = () => {
  const [shows, setShows] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`http://${localStorage.getItem('ip')}:4000/tvshows/all`)
      .then(d => {
        setShows(d.data.files);
      });
  }, []);

  return (
    <div className="h-screen bg-green-400">
      <Header />
      <div className="grid grid-cols-4 gap-3">
        {shows.map(show => (
          <TVShow name={show} key={show} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;

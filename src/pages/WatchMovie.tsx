import React from 'react';
import useQuery from '../utils/useQuery';
import ReactPlayer from 'react-player';
import Header from '../components/Header';

const WatchMovie = () => {
  const query = useQuery();

  return (
    <div className="h-screen bg-green-400">
      <Header />
      <video controls autoPlay>
        <source
          type="video/mp4"
          src={`http://${localStorage.getItem(
            'ip'
          )}:4000/movies/view?name=${query
            .get('name')
            ?.replaceAll(' ', '%20')}`}
        ></source>
      </video>

      <h1 className="text-white font-bold text-4xl">{query.get('name')}</h1>
    </div>
  );
};

export default WatchMovie;

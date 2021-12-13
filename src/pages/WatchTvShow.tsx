import React from 'react';
import useQuery from '../utils/useQuery';

const WatchTvShow = () => {
  const query = useQuery();

  return (
    <div className="h-screen bg-green-400">
      <video
        src={`http://${localStorage.getItem(
          'ip'
        )}:4000/tvshows/view?name=${query.get(
          'name'
        )}&season=Season%20${query.get('season')}&episode=${query.get(
          'episode'
        )}`}
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default WatchTvShow;

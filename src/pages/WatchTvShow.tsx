import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useQuery from '../utils/useQuery';

const WatchTvShow = () => {
  const [episodes, setEpisodes] = useState<string[]>([]);
  const navigate = useNavigate();

  const query = useQuery();

  useEffect(() => {
    axios
      .get(
        `http://${localStorage.getItem(
          'ip'
        )}:4000/tvshows/episodes?name=${query.get('name')}&season=${query.get(
          'season'
        )}`
      )
      .then(d => {
        setEpisodes(d.data.episodes);
      });
  }, []);

  return (
    <div className="h-screen bg-green-400">
      <Header />
      <div className="grid grid-cols-2">
        <div className="h-full w-full">
          <video autoPlay controls width="100%" height="100%">
            <source
              src={`http://${localStorage.getItem(
                'ip'
              )}:4000/tvshows/view?name=${query.get(
                'name'
              )}&season=Season%20${query.get('season')}&episode=${query.get(
                'episode'
              )}`}
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col p-4">
            <h1 className="text-4xl text-white">{query.get('name')}</h1>
            <h4 className="text-white">
              Season {query.get('season')} {query.get('episode')}
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-6 p-4 grid-rows-6">
          {episodes
            .sort(function (a, b) {
              return parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1]);
            })

            .map(episode => {
              if (episode === '') return null;

              if (episode === query.get('episode')) {
                return (
                  <div className="p-1 cursor-pointer bg-green-400 rounded flex w-5/6 h-2/4 items-center justify-center border border-white">
                    <strong className="text-white">{episode}</strong>
                  </div>
                );
              }

              return (
                <div
                  onClick={() => {
                    navigate(
                      `/tvshow/view?name=${query.get(
                        'name'
                      )}&season=${query.get('season')}&episode=${episode}`
                    );
                    window.location.reload();
                  }}
                  className="p-1 bg-white rounded cursor-pointer flex justify-center items-center w-5/6 h-2/4 text-green-400"
                >
                  <strong className="text-green-400">{episode}</strong>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WatchTvShow;

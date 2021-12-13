import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useQuery from '../utils/useQuery';

const ChooseEpisode = () => {
  const query = useQuery();
  const [seasons, setSeasons] = useState<string[]>([]);
  const [episodes, setEpisodes] = useState<string[]>([]);
  const [season, setSeason] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://${localStorage.getItem(
          'ip'
        )}:4000/tvshows/seasons?name=${query.get('name')}`
      )
      .then(d => {
        const s = d.data.seasons;
        setSeasons(s);
      });
  }, []);

  useEffect(() => {
    setEpisodes([]);
    axios
      .get(
        `http://${localStorage.getItem(
          'ip'
        )}:4000/tvshows/episodes?name=${query.get('name')}&season=${
          season?.split(' ')[1]
        }`
      )
      .then(d => {
        setEpisodes(d.data.episodes);
      })
      .catch(err => console.log(err));
  }, [season]);

  return (
    <div className="h-screen flex flex-col bg-green-400">
      <Header />
      <div className="h-full w-full flex flex-col  items-center justify-center">
        <div className="h-5/6 w-5/6 border flex flex-row">
          <div className="overflow-y-auto border-r-8 min-h-full w-2/6 flex flex-col">
            {seasons.map(s => {
              return (
                <div
                  key={s}
                  className="flex w-5/6 m-3 rounded cursor-pointer bg-white p-4"
                  onClick={() => {
                    setSeason(s);
                  }}
                >
                  <strong className="text-green-600">{s}</strong>
                </div>
              );
            })}
          </div>
          <>
            {season ? (
              <div className="w-full flex max-h-full flex-col items-center justify-center overflow-y-auto">
                {episodes && (
                  <>
                    {episodes.map(episode => {
                      return (
                        <div
                          onClick={() => {
                            navigate(
                              `/tvshow/view?name=${query.get('name')}&season=${
                                season.split(' ')[1]
                              }&episode=${episode}`
                            );
                          }}
                          className="flex w-5/6 cursor-pointer mb-4  bg-white p-2 text-green-500 rounded"
                        >
                          <strong>{episode}</strong>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            ) : (
              <div className="w-full flex h-full items-center justify-center">
                <h1 className="text-white font-thin text-lg">
                  Select a season
                </h1>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ChooseEpisode;

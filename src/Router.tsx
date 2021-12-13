import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChooseEpisode from './pages/ChooseEpisode';
import Entry from './pages/Entry';
import Main from './pages/Main';
import TvShows from './pages/TvShows';
import WatchMovie from './pages/WatchMovie';
import WatchTvShow from './pages/WatchTvShow';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />

      <Route path="/main" element={<Main />} />
      <Route path="/watch/movie" element={<WatchMovie />} />
      <Route path="/tvshows" element={<TvShows />} />
      <Route path="/tvshow/episodes" element={<ChooseEpisode />} />
      <Route path="/tvshow/view" element={<WatchTvShow />} />
    </Routes>
  );
};

export default Router;

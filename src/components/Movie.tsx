import React from 'react';
import { useNavigate } from 'react-router';

interface Props {
  name: string;
}

const Movie: React.FC<Props> = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer w-2/4 bg-white p-4 rounded">
      <img
        src={`http://${localStorage.getItem(
          'ip'
        )}:4000/posters/${name.replaceAll(' ', '%20')}.jpg`}
        alt=""
        width={100}
      />
      <h1>{name}</h1>
      <span>
        <button
          onClick={() => {
            navigate('/watch/movie?name=' + name.replaceAll(' ', '%20'));
          }}
          className="bg-green-400 text-white p-2 rounded"
        >
          Watch
        </button>
      </span>
    </div>
  );
};

export default Movie;

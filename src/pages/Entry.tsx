import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Entry() {
  const [ip, setIP] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('ip')) return;

    navigate('/main');
  }, [navigate]);

  return (
    <div className="h-screen bg-green-400 flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center w-1/6 p-10 bg-white rounded"
        onSubmit={async e => {
          e.preventDefault();
          const data = await axios.get(`http://${ip}:4000/verify`);

          if (data.status === 200) {
            if (data.data === 'yes') {
              localStorage.setItem('ip', ip);
              navigate('/main');
            }
          } else {
            alert('No server was found on IP ' + ip);
          }
        }}
      >
        <input
          type="text"
          className="rounded bg-green-200 text-green-800 outline-none pl-2"
          placeholder="Enter Server IP"
          value={ip}
          onChange={e => setIP(e.target.value)}
        />
        <button
          type="submit"
          className="rounded bg-green-600 hover:bg-green-700 text-white text-center cursor-pointer mt-3"
        >
          Get started
        </button>
      </form>
    </div>
  );
}

export default Entry;

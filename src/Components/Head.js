
import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <header className="header flex justify-between items-center px-4 py-3 bg-white-800 text-black">
      <div>
        <strong className="text-2xl">Where in the world?</strong>
      </div>

      <div className="dark-mode-btn">
          <Link to={"/feedback"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Give Feedback
          </button>
          </Link>
        
      </div>  
    </header>
  );
};

export default Head;





import React from 'react';

const Head = () => {
  /* const [isdark, setisdark] = useState(true);

  const handleClick = () => {
    document.body.classList.toggle('light-theme');
    setisdark(!isdark);
  }; */

  return (
    <div>
      <header className="header flex justify-between items-center px-4 py-3 bg-gray-800 text-white">
        <div>
          <h1 className="text-2xl">Where in the world?</h1>
        </div>

       {/*  <div className="dark-mode-btn">
          <button
            className={`bg-${isdark ? 'blue-500' : 'yellow-500'} hover:bg-${isdark ? 'blue-700' : 'yellow-700'} text-white font-bold py-2 px-4 rounded`}
            onClick={handleClick}
          >
            {isdark ? 'Light Mode ☀️' : 'Dark Mode🌙'}
          </button>
        </div> */}
      </header>
    </div>
  );
};

export default Head;

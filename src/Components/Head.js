


import React from 'react';

const Head = () => {
  /* const [isdark, setisdark] = useState(true);

  const handleClick = () => {
    document.body.classList.toggle('light-theme');
    setisdark(!isdark);
  }; */

  return (
    <div>
      <header className="header flex justify-between items-center px-4 py-3 bg-white-800 text-black">
        <div>
          <strong className="text-2xl">Where in the world?</strong>
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
